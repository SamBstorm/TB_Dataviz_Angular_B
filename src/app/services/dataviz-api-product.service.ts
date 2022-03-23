import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatavizApiProductService {

  private _url : string = 'http://localhost:3000/product/';
  constructor(
    private _http : HttpClient
  ) { }

  public getAll() : Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._url);
  }

  public post(newProduct : IProduct) :Observable<any>{
    return this._http.post<any>(this._url, newProduct);
  }
}
