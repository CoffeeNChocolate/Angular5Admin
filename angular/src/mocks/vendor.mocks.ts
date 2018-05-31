import { VendorDetails } from "../app/pages/vendor/vendor.component";

export class VendorMockBuilder {
    vendor: VendorDetails;

    constructor() { }
    getVendorDetailsForDev(): VendorDetails {

        let vendor = new VendorDetails();
        vendor.vendorId= "99",
        vendor.name= '89',
        vendor.type= '46',
        vendor.zip= "500101",
        vendor.city= null,
        vendor.address2= "10:49:35",
        vendor.address1= "1978-03-04",
        vendor.phone= "2007-01-19",
        vendor.mobile= null,
        vendor.contractId= '20170918123',
        vendor.contractDate=new Date( "2007-01-19"),
        vendor.registrationType= 2,
        vendor.referDetails= "Refered by King Bakers Raghu Garu"
        return vendor;
    }
}