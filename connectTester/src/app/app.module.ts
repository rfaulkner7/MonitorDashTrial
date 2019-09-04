import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { PullServiceService } from "./pull-service.service";
import { ChartsModule } from "ng2-charts";
import { GoogleChartsModule } from "angular-google-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { MyDoughnutChartComponent } from "./my-doughnut-chart/my-doughnut-chart.component";
import { MyPieChartComponent } from "./my-pie-chart/my-pie-chart.component";
import { MyRadarChartComponent } from "./my-radar-chart/my-radar-chart.component";
import { TableViewComponent } from "./table-view/table-view.component";
import { DefaultComponent } from "./default/default.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../app/material.module";

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyPieChartComponent,
    MyRadarChartComponent,
    TableViewComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    GoogleChartsModule,
    FormsModule,
    NgbModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
