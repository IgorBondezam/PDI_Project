import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
