import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { DatavizApiProductService } from 'src/app/services/dataviz-api-product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  public products : IProduct[] = [];
  constructor(
    private _apiProduct : DatavizApiProductService
  ) { }

  ngOnInit(): void {
    this._apiProduct.getAll().subscribe({
      next : data => this.products = data,
      error : err => console.error(err),
      complete : () => console.log('Fin de la requête GetAll')
    })
  }

}
