import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  customer: Customer;
  loginDetails: Customer;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login(user: any) {
    console.log(user);
    this.customer = new Customer();
    this.customer.email = user.email;
    this.customer.password = user.password;
    console.log(this.customer);
    this.loginService.login(this.customer).subscribe(
      res => {
        this.loginDetails = res;

        console.log(this.loginDetails);
      }
    );
  }
}
