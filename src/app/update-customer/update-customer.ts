import { Component, Inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { customerModel } from '../customer.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: '[app-update-customer]',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatDialogActions, ReactiveFormsModule],
  templateUrl: './update-customer.html',
  styleUrl: './update-customer.css',
})
export class UpdateCustomer {
  dataCustomer!: customerModel;

constructor(@Inject(MAT_DIALOG_DATA) public data: customerModel, private dialogRef: MatDialogRef<UpdateCustomer>) {
  this.dataCustomer = data;
  // console.log(this.dataCustomer);
}

editForm!: FormGroup;

ngOnInit() {
  this.editForm = new FormGroup({
    sex: new FormControl(this.dataCustomer.sex, Validators.required),
    firstName: new FormControl(this.dataCustomer.firstName, Validators.required),
    lastName: new FormControl(this.dataCustomer.lastName, Validators.required),
    address: new FormControl(this.dataCustomer.address, Validators.required),
    city: new FormControl(this.dataCustomer.city, Validators.required),
    state: new FormControl(this.dataCustomer.state, Validators.required),
    order: new FormControl(this.dataCustomer.orderTotal, Validators.required),
  });
}

onUpdateCustomer(gender:'male' | 'female',firstName: string, lastName: string, address: string, city: string, state: string, order: number){
  const updatedCustomer:customerModel = {
    id:this.dataCustomer.id,
    sex: gender,
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    orderTotal: order,
  }
  console.log(updatedCustomer)
  this.dialogRef.close(updatedCustomer);
}
  
}
