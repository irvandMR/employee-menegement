export interface Employee {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}
export interface Column {
  field: string;
  header: string;
}

export interface Group {
  id: number;
  name: string;
  code: string;
  description: string;
}