import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerStore } from '../customer-store';

@Component({
  selector: 'app-customer-details',
  imports: [],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css',
})
export class CustomerDetails implements OnInit{
  route = inject(ActivatedRoute)
  store = inject(CustomerStore)

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.store.selectCustomer(id);
  }
}
