import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule, 
         MatFormFieldModule, 
         MatRadioModule, 
         MatSelectModule, 
         MatDatepickerModule, 
         MatCheckboxModule, 
         MatNativeDateModule, 
         MatButtonModule, 
         MatSnackBarModule, 
         MatTableModule,
         MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    Material.MatSortModule,
    Material.MatPaginatorModule

  ],
  exports: [
    Material.MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    Material.MatSortModule,
    Material.MatPaginatorModule
  ]
})
export class MaterialModule { }
