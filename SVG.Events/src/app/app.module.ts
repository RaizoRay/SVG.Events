import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrangeDirective } from './Directives/orange.directive';
import { GreenDirective } from './Directives/green.directive';
import { BlueDirective } from './Directives/blue.directive';
import { YellowDirective } from './Directives/yellow.directive';


@NgModule({
  declarations: [
    AppComponent,
    OrangeDirective,
    GreenDirective,
    BlueDirective,
    YellowDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
