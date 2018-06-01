import { HttpClient } from '@angular/common/http';
import { Order } from './order';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
    /**
     *
     */
    constructor(private http: HttpClient) {

    }
    getOrderInformation(): any {
        return this.http.get<any>('assets/data/vendor.json')
            .toPromise()
            .then(res => <Order>res.orders)
            .then(orders => {
                console.log(orders);
                return orders;
            });
    }
}