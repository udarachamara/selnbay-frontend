import { Component, OnInit } from '@angular/core';
import {  ProductServiceService } from '../../services/product-service.service';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  
  constructor(private productServiceService:ProductServiceService) { 
    let res = productServiceService.getProducts().subscribe((data)=>{
      console.log(data);
    });
    
  }

  ngOnInit() {
  }

}
