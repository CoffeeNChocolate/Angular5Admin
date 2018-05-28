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
        // this.vendorEditDetails = new VendorDetails('', '', '', '', '', '', '', '', '', '', new Date(), 0, '');
        // this.vendorDetails = new VendorDetails('', '', '', '', '', '', '', '', '', '', new Date(), 0, '');
        this.vendorService.getVendorInformation().then(x => {
            this.vendorEditDetails = new VendorDetails(

            );
            //this.vendorEditDetails = this.vendorDetails;
            console.log("vednors  details", this.vendorDetails);
        });
    }
    ngOnInit() {
        this.vendorService.getVendorInformation().then(x => {
            this.vendorDetails = new VendorDetails();
            this.assignValue(x.vendor);
            // this.vendorDetails.vendorId = x.vendor.vendorId,
            //     this.vendorDetails.name = x.vendor.name,
            //     this.vendorDetails.type = x.vendor.type,
            //     this.vendorDetails.zip = x.vendor.zip,
            //     this.vendorDetails.city = x.vendor.city,
            //     this.vendorDetails.address2 = x.vendor.address2,
            //     this.vendorDetails.address1 = x.vendor.address1,
            //     this.vendorDetails.phone = x.vendor.phone,
            //     this.vendorDetails.mobile = x.vendor.mobile,
            //     this.vendorDetails.contractId = x.vendor.contractId,
            //     this.vendorDetails.contractDate = x.vendor.contractDate,
            //     this.vendorDetails.registrationType = x.vendor.registrationType,
            //     this.vendorDetails.referDetails = x.vendor.referDetails
            //this.vendorEditDetails = this.vendorDetails;
            console.log("vednors  details", this.vendorDetails);
        });
    }
    get hasVendorDetails(): boolean {
        return (this.vendorDetails !== null) ? true : false;
    }
    saveVendorInformation(data: VendorDetails) {
        this.display = false;
        console.log(data, this.vendorDetails);

        this.assignValue(data);
        var res = this.vendorService.saveVendorInformation(data);
        console.log(data, this.vendorDetails);
        data = null;
    }
    assignValue(data: VendorDetails) {
        var vendorDetail = JSON.parse(JSON.stringify(data));
        this.vendorDetails.vendorId = vendorDetail.vendorId? vendorDetail.vendorId:this.vendorDetails.vendorId,
            this.vendorDetails.name = vendorDetail.name?vendorDetail.name:this.vendorDetails.name,
            this.vendorDetails.type = vendorDetail.type?vendorDetail.type:this.vendorDetails.type,
            this.vendorDetails.zip = vendorDetail.zip?vendorDetail.zip:this.vendorDetails.zip,
            this.vendorDetails.city = vendorDetail.city? vendorDetail.city:this.vendorDetails.city,
            this.vendorDetails.address2 = vendorDetail.address2?vendorDetail.address2:this.vendorDetails.address2,
            this.vendorDetails.address1 = vendorDetail.address1?vendorDetail.address1:this.vendorDetails.address1,
            this.vendorDetails.phone = vendorDetail.phone?vendorDetail.phone:this.vendorDetails.phone,
            this.vendorDetails.contractDate = vendorDetail.contractDate?vendorDetail.contractDate:this.vendorDetails.contractDate,
            this.vendorDetails.registrationType = vendorDetail.registrationType? vendorDetail.registrationType:this.vendorDetails.registrationType ,
            this.vendorDetails.referDetails = vendorDetail.referDetails?vendorDetail.referDetails:this.vendorDetails.referDetails
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
