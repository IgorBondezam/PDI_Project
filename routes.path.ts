import {Routes} from "@angular/router";
import {VazioModule} from "./src/app/pages/vazio/vazio.module";
import {LoginModule} from "./src/app/pages/login/login.module";

export const projectPath: Routes = [
  {
    path: "playground",
    loadChildren: () => VazioModule
  },

  {
    path: "login",
    loadChildren: () => LoginModule
  },
]
