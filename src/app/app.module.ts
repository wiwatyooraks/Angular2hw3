import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component';
import { TreeModule } from '@circlon/angular-tree-component';



@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule, FormsModule, TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
