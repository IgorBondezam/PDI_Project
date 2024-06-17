import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {projectPath} from "../../routes.path";

const routes: Routes = projectPath;

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
