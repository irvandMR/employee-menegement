import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { BtnSaveComponent } from './btn-save/btn-save.component';
import { BtnAddComponent } from './btn-add/btn-add.component';
import { BtnSelectComponent } from './btn-select/btn-select.component';
import { BtnCancelComponent } from './btn-cancel/btn-cancel.component';
// import { CurrencyToIdrPipe } from '../util/format-currency.pipe';
import { BtnViewComponent } from './btn-view/btn-view.component';
import { BtnDeleteComponent } from './btn-delete/btn-delete.component';
import { UtilModule } from '../util/util.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { BtnEditComponent } from './btn-edit/btn-edit.component';

@NgModule({
  declarations: [
    BtnSaveComponent,
    TableComponent,
    BtnAddComponent,
    BtnSelectComponent,
    BtnCancelComponent,
    BtnViewComponent,
    BtnDeleteComponent,
    SearchComponent,
    ToastComponent,
    BtnEditComponent,
  ],
  imports: [CommonModule, UtilModule, FormsModule],
  exports: [
    BtnSaveComponent,
    TableComponent,
    BtnAddComponent,
    BtnSelectComponent,
    BtnCancelComponent,
    SearchComponent,
    ToastComponent,
  ],
})
export class ShareComponentModule {}
