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
    sex: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    order: new FormControl('',[Validators.required]),
  });
  submitDialog(gender:'male' | 'female',firstName: string, lastName: string, address: string, city: string, state: string, order: number){
   const newCustomer:customerModel = {
    id:'c'+Date.now().toString(36) + Math.random().toString(20),
    sex: gender,
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    orderTotal: order,
   }
   console.log(newCustomer.id)
   this.dialogRef.close(newCustomer);
  }
}
