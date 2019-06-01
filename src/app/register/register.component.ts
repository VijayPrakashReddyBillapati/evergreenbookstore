import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer.model';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private registerService:  RegisterService) { }
  customer: Customer;
  registerStatus: any;
  private headers = new HttpHeaders({
    'Content-type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*'
  });
  private options = { headers: this.headers }
  ngOnInit() {
  }

  register(user: any) {
    console.log(user);
    this.customer = new Customer();
    this.customer.email = user.email;
    this.customer.fullName = user.name;
    this.customer.password = user.password;
    this.customer.address = user.address;
    this.customer.city = user.city;
    this.customer.zipCode = user.zip;
    this.customer.country = user.country;
    this.customer.phoneNumber = user.phoneNumber;
    console.log(this.customer);
    this.registerStatus= this.registerService.register(this.customer).subscribe(
      res => {
        this.registerStatus = res;
        console.log(this.registerStatus);
      }
    );
    // this.http.post("http://localhost:8086/evergreenbookstore/register", this.customer, this.options).subscribe();
  }

}
