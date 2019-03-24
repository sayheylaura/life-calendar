import { Component, OnInit } from "@angular/core";

import { FACES } from "../faces";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  faces = FACES;

  constructor() { }

  ngOnInit() { }
}
