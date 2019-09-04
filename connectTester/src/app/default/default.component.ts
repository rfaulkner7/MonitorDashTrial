import { Component, OnInit } from "@angular/core";
import { checkDefault } from "../app.component";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.css"]
})
export class DefaultComponent implements OnInit {
  constructor() {
    checkDefault();
  }

  ngOnInit() {}
}
