import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IDatas } from '../models/chart/idatas';

@Injectable({
  providedIn: 'root'
})
export class DatavisApiChartService {

  public _urlProd : string = 'http://localhost:3000/product/';
  public _urlCat : string = 'http://localhost:3000/productCategory/';
  public _urlOrd : string = 'http://localhost:3000/order/';
  public _urlDet : string = 'http://localhost:3000/orderDetail/';
  constructor(private _http : HttpClient) { }

  public getLabels():Observable<string[]>{
    return this._http.get<any[]>(this._urlCat).pipe(
      map(d => d.map(e=>e.name))
    )
  }

  public getDatas():Observable<IDatas[]>{
    return this._http.get<any[]>(this._urlDet).pipe(
      map(data => {
        let result : IDatas[] = [];
        data.forEach(element => {
          if(result.find(r=>r.label == element.orderId)) result.find(r=>r.label == element.orderId)?.data.push(element.quantity);
          else result.push({data:[element.quantity], label : element.orderId});
        })
        return result;
      })
    )
  }
}
