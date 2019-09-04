import { Component, OnInit } from "@angular/core";
import { PullServiceService } from "../pull-service.service";
import { ChartData, checkDefault } from "../app.component";

@Component({
  selector: "app-my-doughnut-chart",
  templateUrl: "./my-doughnut-chart.component.html",
  styleUrls: ["./my-doughnut-chart.component.css"]
})
export class MyDoughnutChartComponent implements OnInit {
  public doughnutChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 16
      }
    }
  };

  public doughnutChartLabels = ["googoo", "yes"];
  public doughnutChartType = "doughnut";
  public doughnutChartLegends = true;

  public doughnutChartData = [{ data: [2, 3], backgroundColor: ["#FFFFFF"] }];

  constructor(private _pullService: PullServiceService) {
    checkDefault();
  }

  chartData: ChartData[];
  numArray = [];
  nameArray = [];

  ngOnInit() {
    this.getChartData();
    this.doughnutChartLabels = this.nameArray;
    this.doughnutChartData = [
      {
        data: this.numArray,
        backgroundColor: [
          "#375E97",
          "#FB6542",
          "#FFBB00",
          "#3F681C",
          "#F18D9E",
          "#8D230F",
          "#B7B8B6"
        ]
      }
    ];
  }

  getChartData() {
    this._pullService.getChartData().subscribe(
      data => {
        this.chartData = data;
        this.chartData.forEach(element => {
          this.numArray.push(element.number);
          this.nameArray.push(element.name);
        });
      },
      err => {
        console.error(err);
      },
      () => console.log("done loading doughnut chart data")
    );
  }
}
