import { Component } from "@angular/core";
import { PullServiceService } from "./pull-service.service";
import { Observable } from "rxjs";
import { Chart } from "chart.js";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _pullService: PullServiceService) {}

  public auditData: AuditData[];
  public audit: AuditData;
  public chartData: ChartData[];
  public isVisible = true;

  ngOnInit() {
    document.body.classList.add("image");
    checkDefault();
  }

  // getAuditById(x) {
  //   if (!x) {
  //     this._pullService.getAudits().subscribe(
  //       data => {
  //         this.auditData = data;
  //       },
  //       err => {
  //         console.error(err);
  //       },
  //       () => console.log("done loading audit")
  //     );
  //   } else {
  //     this._pullService.getAuditById(x).subscribe(
  //       element => {
  //         this.audit = element;
  //         console.log(this.audit);
  //       },
  //       err => {
  //         console.error(err);
  //       },
  //       () => console.log("done loading audit")
  //     );
  //   }
  // }

  //   getChartData() {
  //     this._pullService.getChartData().subscribe(
  //       data => {
  //         this.chartData = data;
  //         console.log(this.chartData[1]);
  //       },
  //       err => {
  //         console.error(err);
  //       },
  //       () => console.log("done loading chart data")
  //     );
  //   }
}

export class AuditData {
  auditID: string;
  interfac: string;
  source: string;
  target: string;
  transactionID: string;
  date: string;
  status: string;
  statusMessage: string;
  server: string;
  logLevel: string;
  transactionData: string;
  insertDateTime: string;
  quoteNumber: string;
  additionalInformation: string;
  policyNumber: string;
  serviceName: string;
}

export class ChartData {
  name: string;
  number: number;
}

export function checkDefault() {
  var url = document.location.href;
  var link = document.getElementById("hide");
  if (
    url.indexOf("http://localhost:4200/default") >= 0 ||
    url == "http://localhost:4200/"
  ) {
    link.style.visibility = "hidden";
  } else {
    link.style.visibility = "visible";
  }
}
