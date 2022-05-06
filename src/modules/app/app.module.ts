import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModule } from '../login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, LoginModule, BrowserAnimationsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
