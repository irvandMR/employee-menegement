import { Injectable } from '@angular/core';
import { Employee } from '../shared/type';
import { employees } from '../shared/data';
import { generateRandomId } from '../util/generatedId';
import { TableService } from '../components/table/table.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeSerice {
  constructor(private srvTable: TableService) {}

  getEmployee(): Employee[] {
    return employees;
  }
  getEmployeeId(id?: string) {
    return employees.find((e) => e.id === id);
  }

  add(body: Employee) {
    employees.push({ ...body, id: generateRandomId().toString() });
    this.srvTable.setItem('filteredData', employees);
  }

  delete(id: string): boolean {
    const index = employees.findIndex((e) => e.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      return true;
    }
    return false;
  }
}
