import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }
  startDate = new Date(1990, 0, 1);

  departments = [
    {id: 3, value: 'Dep 1'},
    {id: 2, value: 'Dep 2'},
    {id: 3, value: 'Dep 3'}
  ]

  
  ngOnInit() {
  }

  onClear(){
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }
}
