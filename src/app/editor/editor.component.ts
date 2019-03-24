import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"]
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onChange(event: any): void {
    const value = event.target.value;
    console.log(value);
  }

  onClick(event: MouseEvent): void {
    console.log(event);
  }
}
