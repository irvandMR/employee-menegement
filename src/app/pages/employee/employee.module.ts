import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareComponentModule } from '../../components/share-component.module';
import { ListComponentEmployee } from './list/list.component';
import { AddComponentEmployee } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailEmployeeComponent } from './detail/detail.component';
import { UtilModule } from '../../util/util.module';
// import { CurrencyToIdrPipe } from '../../util/format-currency.pipe';

@NgModule({
  declarations: [
    ListComponentEmployee,
    AddComponentEmployee,
    DetailEmployeeComponent,
  ],
  imports: [
    CommonModule,
    ShareComponentModule,
    ReactiveFormsModule,
    FormsModule,
    UtilModule,
  ],
})
export class EmployeeModule {}
