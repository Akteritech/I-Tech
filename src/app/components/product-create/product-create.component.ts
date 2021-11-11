import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  submitted = false;
  productForm!: FormGroup;
  EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService

  ) { 
    this.mainForm(
      this.productForm = this.fb.group({
        name: ['', [Validators.required]],
        description: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        price: ['', [Validators.required]]
      })
    );
  }
  mainForm() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
