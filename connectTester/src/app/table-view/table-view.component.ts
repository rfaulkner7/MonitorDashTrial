import { Component, OnInit } from "@angular/core";
import { PullServiceService } from "../pull-service.service";
import { AuditData, checkDefault } from "../app.component";
import { GoogleChartsModule } from "angular-google-charts";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.css"]
})
export class TableViewComponent implements OnInit {
  constructor(private _pullService: PullServiceService) {
    checkDefault();
  }

  ngOnInit() {
    this.getAuditById("");
  }

  title = "Audits";
  type = "Table";
  data = [];
  columnNames = [
    "auditID",
    "interface",
    "source",
    "target",
    "transactionID",
    "date",
    "status",
    "statusMessage",
    "server",
    "logLevel",
    "transactionData",
    "insertDateTime",
    "quoteNumber",
    "additionalInformation",
    "policyNumber",
    "serviceName"
  ];

  auditData: AuditData[];
  audit: AuditData;

  getAuditById(x) {
    if (!x) {
      this._pullService.getAudits().subscribe(
        data => {
          this.auditData = data;
          this.data = [];
          this.auditData.forEach(item => {
            this.data.push([
              item.auditID,
              item.interfac,
              item.source,
              item.target,
              item.transactionID,
              item.date,
              item.status,
              item.statusMessage,
              item.server,
              item.logLevel,
              item.transactionData,
              item.insertDateTime,
              item.quoteNumber,
              item.additionalInformation,
              item.policyNumber,
              item.serviceName
            ]);
          });
        },
        err => {
          console.error(err);
        },
        () => console.log("done loading audit")
      );
    } else {
      this._pullService.getAuditById(x).subscribe(
        element => {
          this.audit = element;
          console.log(this.audit);
        },
        err => {
          console.error(err);
        },
        () => console.log("done loading audit")
      );
    }
  }
}
