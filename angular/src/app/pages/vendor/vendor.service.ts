import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { VendorInformation } from './vendor';

@Injectable()
export class VendorService {
    
    constructor(private http: HttpClient) {}
    
    getCarsSmall() {
        return this.http.get<any>('assets/data/vendor.json')
            .toPromise()
            //.then(res => <VendorInformation> res.vendor)
            .then(vendor =>
                vendor);
    }
}
