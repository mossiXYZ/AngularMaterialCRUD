import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService } from './shared/employee.service';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DepartmentService } from './shared/department.service';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Main Angular fire module 
    AngularFireDatabaseModule  // Firebase database module

  ],
  providers: [
    EmployeeService,
    DepartmentService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }
