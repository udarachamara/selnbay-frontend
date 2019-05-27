import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private httpClient: HttpClient) {
    
   }

   createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic '); 
  }

  getProducts():Observable<Product>{
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.httpClient.get<Product>('http://localhost:8080/payments');
  }
}
