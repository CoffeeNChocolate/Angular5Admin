import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { VendorInformation } from './vendor';
import { VendorDetails } from './vendor.component';

@Injectable()
export class VendorService {

    constructor(private http: HttpClient) { }

    getVendorInformation() {
        return this.http.get<any>('assets/data/vendor.json')
            .toPromise()
            //.then(res => <VendorInformation> res.vendor)
            .then(vendor =>
                vendor);
    }

    saveVendorInformation(vendorDetails: VendorDetails): any {
        console.log(vendorDetails);
        return this.http.post('/API/identity/user', vendorDetails).subscribe(res => { console.log(res); return res; })
    }
}
