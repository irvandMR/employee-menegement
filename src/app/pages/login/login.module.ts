import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ShareComponentModule } from '../../components/share-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ShareComponentModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
