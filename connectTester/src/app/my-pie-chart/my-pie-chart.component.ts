import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { PullServiceService } from "../pull-service.service";
import { ChartData, AuditData, checkDefault } from "../app.component";
import { HttpClient } from "selenium-webdriver/http";
import { element } from "protractor";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-my-pie-chart",
  templateUrl: "./my-pie-chart.component.html",
  styleUrls: ["./my-pie-chart.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class MyPieChartComponent implements OnInit {
  myDate = new Date();
  public start;
  public end;

  public pieChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 16
      }
    },
    onClick: (event, array) =>
      this.getByService(this.nameArray[array[0]._index])
  };

  graphClickEvent(event, array) {
    // // console.log(this.data.labels[array[0]._index]);
    // var name = this.data.labels[array[0]._index];
    // var num = this.data.datasets[0].data[array[0]._index];
    // var oldcolor = this.data.datasets[0].backgroundColor[array[0]._index];
    // console.log(this.data);
    // this.data.labels = [name];
    // this.data.datasets[0].data = [num];
    // this.data.datasets[0].backgroundColor[
    //   array[0]._index
    // ] = this.data.datasets[0].backgroundColor[0];
    // this.data.datasets[0].backgroundColor[0] = oldcolor;
    // console.log(this.data);
  }

  public getByService(x) {
    if (this.tracker == "created") {
      this.numArray = [];
      this.nameArray = [];
      this.auditData = [];
      this.count = [0, 0];
      if (!x) {
        this._pullService.getChartData();
      } else {
        this._pullService.getByService(x).subscribe(data => {
          this.auditData = data;
          this.auditData.forEach(element => {
            if (element.status == "FIN") {
              this.count[0] = this.count[0] + 1;
            } else {
              this.count[1] = this.count[1] + 1;
            }
          });
          this.numArray = this.count;
          this.nameArray = ["Finished", "Not Finished"];
          this.updateChart(this.nameArray, this.numArray);
        });
        this.numArray2 = [];
        this.nameArray2 = [];
        this._pullService.getServiceBetween(x).subscribe(data => {
          this.auditData2 = data;
          this.auditData2.forEach(element => {
            var placeHolder = 1;
            this.numArray2.push(placeHolder);
            placeHolder = placeHolder + 1;
            this.nameArray2.push();
          });
          this.updateRecent(this.nameArray2, this.numArray2);
          for (var i = 1; i < 8; i++) {
            this.recentLabels.push("Day " + i);
          }
        });
      }
      this.tracker = "weh";
    }
  }

  public tracker = "created";

  public recentData = [{ data: [], backgroundColor: ["FFFFFF"] }];
  public recentLabels = [];
  public recentOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 16
      }
    }
  };

  public pieChartLabels = ["googoo", "yes"];
  public pieChartType = "pie";
  public pieChartLegends = true;
  public pieChartData = [{ data: [2, 3], backgroundColor: ["#FFFFFF"] }];

  constructor(private _pullService: PullServiceService) {
    checkDefault();
  }

  chartData: ChartData[];
  auditData: AuditData[];
  auditData2: AuditData[];
  count = [0, 0, 0];
  numArray = [];
  numArray2 = [];
  nameArray = [];
  nameArray2 = [];

  ngOnInit() {
    this.getChartData();
    this.updateChart(this.nameArray, this.numArray);
  }

  updateChart(labels, datum) {
    this.pieChartLabels = labels;
    this.pieChartData = [
      {
        data: datum,
        backgroundColor: [
          "#375E97",
          "#FB6542",
          "#FFBB00",
          "#3F681C",
          "#F18D9E",
          "#4CB5F5",
          "B7B8B6"
        ]
      }
    ];
  }

  updateRecent(labels, datum) {
    this.recentLabels = labels;
    this.recentData = [
      {
        data: datum,
        backgroundColor: [
          "#375E97",
          "#FB6542",
          "#FFBB00",
          "#3F681C",
          "#F18D9E",
          "#8D230F",
          "B7B8B6"
        ]
      }
    ];
  }

  reset() {
    this.getChartData();
    this.updateChart(this.nameArray, this.numArray);
    this.updateRecent([], []);
    this.tracker = "created";
  }

  loadSpecificData(x) {}

  getChartData() {
    this.numArray = [];
    this.nameArray = [];
    this.chartData = [];
    this.count = [];
    this._pullService.getChartData().subscribe(
      data => {
        this.chartData = data;
        this.chartData.forEach(element => {
          this.numArray.push(element.number);
          this.nameArray.push(element.name);
        });
        // data = this.chartData;
      },
      err => {
        console.error(err);
      },
      () => console.log("done loading pie chart data")
    );
  }

  searchBetweenDates() {
    let prev: String =
      this.start.getFullYear() +
      "-" +
      (this.start.getMonth() + 1) +
      "-" +
      this.start.getDate();
    let curr: String =
      this.end.getFullYear() +
      "-" +
      (this.end.getMonth() + 1) +
      "-" +
      this.end.getDate();
    this._pullService.getAuditsBetween(prev, curr).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("retrieved between");
      }
    );
    console.log(prev);
    console.log(curr);
  }
}
