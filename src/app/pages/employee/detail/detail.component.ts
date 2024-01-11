import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeSerice } from '../../../services/employee.service';
import { Employee } from '../../../shared/type';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './detail.component.html',
})
export class DetailEmployeeComponent {
  title: string = '';
  id = this.route.snapshot.paramMap.get('id');
  data: Employee | undefined;
  constructor(
    private srv: EmployeeSerice,
    private route: ActivatedRoute,
    private loc: Location
  ) {
    this.title = 'Employee Detail';
  }
  onOk() {
    this.loc.back();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    if (this.id !== null) {
      this.data = this.srv.getEmployeeId(this.id);
    }
  }
}
