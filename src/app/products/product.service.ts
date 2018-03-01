import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
    // private _productURL = './api/products/products.json';
    private _productURL = 'http://localhost:3000/products';
    constructor(private _http: HttpClient) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productURL)
                    .do(data => console.log('Add Data : ' + JSON.stringify(data)))
                    .catch(this.errorHandler);
    }

    private errorHandler(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
