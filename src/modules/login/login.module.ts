import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatInputModule, MatSliderModule],
  exports: [LoginComponent],
})
export class LoginModule {
  loginForm:FormGroup
}
