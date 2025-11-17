import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { customerModel } from '../customer.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatDialogActions, ReactiveFormsModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {
  constructor(private dialogRef: MatDialogRef<DialogBox>){}

  profileForm = new FormGroup({
    sex: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    order: new FormControl(''),
  });
  submitDialog(gender:'male' | 'female',firstName: string, lastName: string, address: string, city: string, state: string, order: number){
   const newCustomer:customerModel = {
    sex: gender,
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    orderTotal: order,
   }
   this.dialogRef.close(newCustomer);
  }
}
