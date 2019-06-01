import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  });
  private options = { headers: this.headers }
  constructor(private http: HttpClient) { }

  login(user: Customer): Observable<Customer[]> {

    return this.http.get< data :Customer[]>("http://localhost:8086/evergreenbookstore/login", user );

    
  }
}
