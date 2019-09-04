import { Component, OnInit } from "@angular/core";
import { PullServiceService } from "../pull-service.service";
import { ChartData, checkDefault } from "../app.component";

@Component({
  selector: "app-my-radar-chart",
  templateUrl: "./my-radar-chart.component.html",
  styleUrls: ["./my-radar-chart.component.css"]
})
export class MyRadarChartComponent implements OnInit {
  public radarChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    scale: {
      gridLines: {
        color: "#707070"
      },
      angleLines: {
        color: "#707070"
      },
      ticks: {
        suggestedMin: 0,
        display: false
      },
      pointLabels: {
        fontSize: 18,
        fontColor: "white"
      }
    }
  };

  public radarChartLabels = ["googoo", "yes"];
  public radarChartType = "radar";
  public radarChartLegends = true;

  public radarChartData = [{ data: [2, 3], borderColor: ["#FFFFFF"] }];

  constructor(private _pullService: PullServiceService) {
    checkDefault();
  }

  chartData: ChartData[];
  numArray = [];
  nameArray = [];

  ngOnInit() {
    this.getChartData();
    this.radarChartLabels = this.nameArray;
    this.radarChartData = [
      {
        data: this.numArray,
        borderColor: [
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
      () => console.log("done loading radar chart data")
    );
  }
}
