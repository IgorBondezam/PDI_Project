import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {VazioComponent} from "./vazio.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: "", component: VazioComponent }
]

@NgModule({
  declarations: [
    VazioComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: []
})
export class VazioModule { }
