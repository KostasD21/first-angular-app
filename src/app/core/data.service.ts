import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICustomer, IOrder } from "../shared/interfaces";

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';

    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
        console.log(this.baseUrl + 'customers.json');
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getCustomer(id: number) : Observable<ICustomer | null> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                map((customers: ICustomer[]) => {
                    let customer = customers.filter((cust: ICustomer) => cust.id === id);
                    return (customer && customer.length) ? customer[0] : null;
                }),
                catchError(this.handleError)
            ) as Observable<ICustomer | null>;
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
        .pipe(
          map(orders => {
            let custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
                const errMessage = error.error.message;
                return throwError(errMessage);
                // Use the following instead if using lite-server
                // return throwError(err.text() || 'backend server error');
        }
        return throwError(error || 'Node.js server error');
    }

}