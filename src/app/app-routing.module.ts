import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CalendarComponent } from "./calendar/calendar.component";
import { EditorComponent } from "./editor/editor.component";

const routes: Routes = [
  { path: "", redirectTo: "/calendar", pathMatch: "full" },
  { path: "calendar", component: CalendarComponent },
  { path: "editor", component: EditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
