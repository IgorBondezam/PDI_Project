import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InputLabelModule} from "../../components/input-label/input-label.module";
import {PanelModule} from "../../components/panel/panel.module";
import {LoginComponent} from "./login.component";
import {ActButtonModule} from "../../components/act-button/act-button.module";

const routes: Routes = [
  { path: "", component: LoginComponent }
]

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        InputLabelModule,
        PanelModule,
        ActButtonModule,
    ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
