import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouting } from './app.routes';

import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModule } from './pages/employee/employee.module';
import { DatePipe } from '@angular/common';
// import { UtilModule } from './util/util.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouting,
    RouterOutlet,
    RouterModule,
    LoginModule,
    EmployeeModule,
    BrowserAnimationsModule,
    // UtilModule,
  ],
  providers: [DatePipe],

  bootstrap: [AppComponent],
})
export class AppModule {}
