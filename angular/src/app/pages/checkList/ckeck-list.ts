export interface CheckList {
    checklistid: number;
    chipsVendorId: string;
    active: boolean;
    activeDate: Date;
    billsDue: boolean;
    billsDueDate: Date;
    request: boolean;
    requestedDate: Date;
}