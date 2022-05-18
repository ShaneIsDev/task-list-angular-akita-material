import { AddTaskComponent } from "./add-task/add-task.component";
import { HomeComponent } from "./home/home.component";
import { Route } from "@angular/router";

export const ROUTES: Route[]=[
  {path:'', component: HomeComponent},
  {path:'addtask', component: AddTaskComponent},
];