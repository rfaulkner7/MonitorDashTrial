import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { ChartData, AuditData } from "./app.component";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class PullServiceService {
  constructor(private http: HttpClient) {}

  getAudits(): Observable<AuditData[]> {
    return this.http.get<AuditData[]>("/api/trial");
  }

  getChartData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>("/api/trial/percentages");
  }

  getByService(service): Observable<AuditData[]> {
    return this.http.get<AuditData[]>("/api/trial/findByService/" + service);
  }

  getAuditById(id): Observable<AuditData> {
    return this.http.get<AuditData>("/api/trial/" + id);
  }

  getServiceBetween(service): Observable<AuditData[]> {
    return this.http.get<AuditData[]>(
      "/api/trial/findServiceByDateBetween/" + service
    );
  }

  getAuditsBetween(prev, curr): Observable<AuditData[]> {
    return this.http.get<AuditData[]>(
      "/api/trial/findAllByDateBetween/" + prev + "/" + curr
    );
  }
}
