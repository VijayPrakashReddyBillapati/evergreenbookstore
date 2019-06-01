import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Origin': '*'
  });
  private options = { headers: this.headers }
  constructor(private http: HttpClient) { }

  register(user: Customer): Observable<any> {

    return this.http.post("http://localhost:8086/evergreenbookstore/register", user, this.options);
  }
}
