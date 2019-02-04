import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private employeeService : EmployeeService,
    private departmentService: DepartmentService,
    private notificationService : NotificationService
  ) { }

  startDate = new Date(1990, 0, 1);

  
  ngOnInit() {
    this.employeeService.getEmployees();
  }

  onClear(){
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();

  }


  onSubmit(){
    if (this.employeeService.form.valid){
      this.employeeService.insertEmployee(this.employeeService.form.value);
      this.employeeService.form.reset();       
      this.employeeService.initializeFormGroup();
      this.notificationService.success('Submitted successfully');

    }
  }
}
