import { Component, OnInit, Input } from "@angular/core";
import { PullServiceService } from "../pull-service.service";
import { ChartData, checkDefault } from "../app.component";

@Component({
  selector: "app-my-bar-chart",
  templateUrl: "./my-bar-chart.component.html",
  styleUrls: ["./my-bar-chart.component.css"]
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 16,
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 16
          }
        }
      ]
    },
    legend: {
      display: false
    },
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ["googoo", "yes"];
  public barChartType = "bar";

  public barChartData = [
    { data: [2, 3], backgroundColor: ["#FFFFFF"], fontColor: "white" }
  ];

  constructor(private _pullService: PullServiceService) {
    checkDefault();
  }

  chartData: ChartData[];
  numArray = [];
  nameArray = [];

  ngOnInit() {
    this.getChartData();
    this.barChartLabels = this.nameArray;
    this.barChartData = [
      {
        data: this.numArray,
        backgroundColor: [
          "#375E97",
          "#FB6542",
          "#FFBB00",
          "#3F681C",
          "#F18D9E",
          "#8D230F",
          "B7B8B6"
        ],
        fontColor: "red"
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
      () => console.log("done loading chart data")
    );
  }
}
