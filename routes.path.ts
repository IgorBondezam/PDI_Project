import {Routes} from "@angular/router";
import {VazioModule} from "./src/app/vazio/vazio.module";

export const projectPath: Routes = [
  {
    path: "home",
    loadChildren: () => VazioModule
  }
]
