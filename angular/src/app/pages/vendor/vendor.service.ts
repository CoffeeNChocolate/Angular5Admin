import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { VendorInformation } from './vendor';
import { VendorDetails } from './vendor.component';

@Injectable()
export class VendorService {

    constructor(private http: HttpClient) { }

    getVendorInformation() {
        return this.http.get<any>('/api/vendor/info')
    }

    
    saveVendorInformation(vendorDetails: VendorDetails): any {
        return this.http.post('/api/vendor/save', vendorDetails).subscribe(res => {  return res; })
    }
}
