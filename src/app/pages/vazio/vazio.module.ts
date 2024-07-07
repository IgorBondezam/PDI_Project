import {NgModule} from '@angular/core';
import {VazioComponent} from "./vazio.component";
import {RouterModule, Routes} from "@angular/router";
import {AppModule} from "../../app.module";
import {InputLabelModule} from "../../components/input-label/input-label.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PanelModule} from "../../components/panel/panel.module";

const routes: Routes = [
  { path: "", component: VazioComponent }
]

@NgModule({
  declarations: [
    VazioComponent,
  ],
    imports: [
        RouterModule.forChild(routes),
        InputLabelModule,
        PanelModule
    ],
  providers: [],
  bootstrap: []
})
export class VazioModule { }
