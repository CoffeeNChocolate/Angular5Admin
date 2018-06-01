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
    vendorEditDetails: VendorDetails;
    vendors: any;
    display: boolean = false;

    showDialog() {
        this.display = true;
    }
    constructor(private vendorService: VendorService) {//
        this.vendorDetails = new VendorDetails();
        this.vendorEditDetails = new VendorDetails();
        this.vendorEditDetails.contractDate = new Date();
    }
    ngOnInit() {
        this.vendorService.getVendorInformation().map(x => this.vendorDetails = x).subscribe(users => {
            this.assignValue(users.vendorDetail)
            this.vendorEditDetails = this.vendorDetails;
            //this.vendorEditDetails.contractDate = new Date();
        });

    }
    get hasVendorDetails(): boolean {
        return (this.vendorDetails !== null) ? true : false;
    }
    saveVendorInformation(data: VendorDetails) {
        this.display = false;
        this.assignValue(data);
        var res = this.vendorService.saveVendorInformation(this.vendorDetails);
        data = null;
    }
    assignValue(data: VendorDetails) {
        console.log('data', data);
        var vendorDetail = data ? JSON.parse(JSON.stringify(data)) : this.vendorDetails;
        this.vendorDetails.vendorId = vendorDetail.vendorId ? vendorDetail.vendorId : this.vendorDetails.vendorId,
            this.vendorDetails.name = vendorDetail.name ? vendorDetail.name : this.vendorDetails.name,
            this.vendorDetails.type = vendorDetail.type ? vendorDetail.type : this.vendorDetails.type,
            this.vendorDetails.zip = vendorDetail.zip ? vendorDetail.zip : this.vendorDetails.zip,
            this.vendorDetails.mobile = vendorDetail.mobile ? vendorDetail.mobile : this.vendorDetails.mobile,
            this.vendorDetails.city = vendorDetail.city ? vendorDetail.city : this.vendorDetails.city,
            this.vendorDetails.address2 = vendorDetail.address2 ? vendorDetail.address2 : this.vendorDetails.address2,
            this.vendorDetails.address1 = vendorDetail.address1 ? vendorDetail.address1 : this.vendorDetails.address1,
            this.vendorDetails.phone = vendorDetail.phone ? vendorDetail.phone : this.vendorDetails.phone,
            this.vendorDetails.contractDate = vendorDetail.contractDate ? new Date(vendorDetail.contractDate) : new Date(this.vendorDetails.contractDate),
            this.vendorDetails.registrationType = vendorDetail.registrationType ? vendorDetail.registrationType : this.vendorDetails.registrationType,
            this.vendorDetails.referDetails = vendorDetail.referDetails ? vendorDetail.referDetails : this.vendorDetails.referDetails
        console.log('vendorDetail', this.vendorDetails);

    }

}
export class VendorDetails implements VendorInformation {
    public vendorId: string; public name: string; public type: string; public zip: string; public city: string;
    public address2: string; public address1: string; public phone: string;
    public mobile: string; public contractId: string; public contractDate: Date;
    public registrationType: number; public referDetails: string;
    constructor(
    ) {

    }
}
