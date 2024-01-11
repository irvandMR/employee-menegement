import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe, Location } from '@angular/common';
import { EmployeeSerice } from '../../../services/employee.service';
import { Router } from '@angular/router';
import { groups } from '../../../shared/data';

@Component({
  selector: 'app-employee-add',
  templateUrl: './add.component.html',
})
export class AddComponentEmployee {
  title: string = '';
  formAdd!: FormGroup;
  today: string | null = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  toastMessage: string = '';
  showToast: boolean = false;

  group = groups;
  constructor(
    private fb: FormBuilder,
    private loc: Location,
    private srv: EmployeeSerice,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.title = 'Employee Add';
    this.createForm();
  }

  createForm() {
    this.formAdd = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['Inactive', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onSelect(e: any) {
    this.formAdd.get('group')?.patchValue(e.name);
  }

  selectStatus(e: any) {
    const isChecked = e.target.checked;
    this.formAdd.get('status')?.patchValue(isChecked ? 'Active' : 'Inactive');
  }

  onSave() {
    if (this.formAdd.valid) {
      let obj = this.formAdd.getRawValue();
      this.srv.add(obj);
      this.showToast = true;
      this.toastMessage = 'Data has been added successfully';
      setTimeout(() => {
        this.showToast = false;
        this.router.navigateByUrl('/employee');
      }, 1500);
    } else {
      this.formAdd.markAllAsTouched();
    }
  }
  onCancel() {
    this.loc.back();
  }
}
