import { Component, ViewChild } from '@angular/core';
import { employees, groups } from '../../../shared/data';
import { Employee } from '../../../shared/type';
import { Router } from '@angular/router';
import { EmployeeSerice } from '../../../services/employee.service';
import { TableComponent } from '../../../components/table/table.component';
import { TableService } from '../../../components/table/table.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component .html',
})
export class ListComponentEmployee {
  title: string = '';
  group = groups;
  selected: any;
  searchText: string = '';
  toastMessage: string = '';
  showToast: boolean = false;
  toastMessageEdit: string = '';
  showToastEdit: boolean = false;

  columnMap = [
    {
      label: 'Username',
      key: 'username',
    },
    {
      label: 'Firstname',
      key: 'firstName',
    },
    {
      label: 'Lastname',
      key: 'lastName',
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Group',
      key: 'group',
    },
    {
      label: 'Salary',
      key: 'basicSalary',
      isCurency: true,
    },
    {
      label: 'Status',
      key: 'status',
      isStatus: true,
    },
  ];

  listData = employees;

  constructor(
    private router: Router,
    private srv: EmployeeSerice,
    private srvTable: TableService
  ) {
    this.title = 'Employee List';
  }

  onAdd() {
    this.router.navigateByUrl('/employee/add');
  }
  tableAction(e: any) {
    const act = e.act;
    const data = e.data;

    if (act == 'view') {
      this.router.navigateByUrl(`/employee/${data.id}`);
    }

    if (act == 'delete') {
      const resp = this.srv.delete(data.id);

      if (resp) {
        this.listData = this.listData.filter((item) => item.id !== data.id);
        this.srvTable.setItem('filteredData', this.listData);
        this.showToast = true;
        this.toastMessage = 'Data has been deleted successfully';
        setTimeout(() => {
          this.showToast = false;
        }, 1500);
      }
    }
    if (act == 'edit') {
      this.showToastEdit = true;
      this.toastMessageEdit = 'Data has been update successfully';
      setTimeout(() => {
        this.showToastEdit = false;
      }, 1500);
    }
  }

  onSelect(e: any) {
    this.selected = e;
  }
  onSearch(e: any) {
    this.searchText = e;
  }
}
