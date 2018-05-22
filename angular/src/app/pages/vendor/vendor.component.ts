import { Component } from "@angular/core";
import { VendorService } from "./vendor.service";
import { VendorInformation } from "./vendor";

@Component({
    selector: 'app-vendor',
    templateUrl: './vendor.component.html',
    styleUrls: ['./vendor.component.css'],
    providers: [VendorService]
})
export class VendorComponent {

    vendorInformation: VendorInformation;
    vendorDetails: VendorDetails;
    vendors: any;
    constructor(private vendorService: VendorService) {//
    }
    ngOnInit() {
        this.vendorService.getCarsSmall().then(x => {
            this.vendorDetails = new VendorDetails(
                x.vendor.vendorId, x.vendor.name, x.vendor.type, x.vendor.zip,
                x.vendor.city, x.vendor.address2, x.vendor.address1, x.vendor.phone,
                x.vendor.mobile, x.vendor.contractId, x.vendor.contractDate, x.vendor.registrationType
            );
            console.log("vednors  details", this.vendorDetails);
        });
        console.log("sdf", this.vendorService.getCarsSmall().then(x => {
            this.vendors = x.vendor;
            console.log(this.vendors);
        }));

    }
    getVendorInformation() {
        //
    }

}
export class VendorDetails implements VendorInformation {

    constructor(public vendorId: string, public name: string, public type: string, public zip: string, public city: string,
        public address2: string, public address1: string, public phone: string, public mobile: string, public contractId: string, public contractDate: string,
        public registrationType: number
    ) { }
}
