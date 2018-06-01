import { Component, OnInit } from "@angular/core";
import { CheckListService } from "./check-list.service";
import { CheckList } from "./ckeck-list";

@Component({
    selector: "check-list",
    templateUrl: "./check-list.component.html",
    providers: [CheckListService],
    styleUrls: ['./check-list.component.css']
})

export class CheckListComponent implements OnInit {
    checkList: CheckListDetails;

    display: boolean = false;
    resquestedDate: Date;
    activeDate: Date;
    billsDueDate: Date;

    showDialog() {
        this.display = true;
    }
    constructor(private checkListService: CheckListService) {

    }
    ngOnInit() {
        this.checkListService.getCheckListDetails().then(x => {
            this.checkList = x;
        })
    }
    saveChecklistInformation(checkList: any): void {
        this.display = false;
        this.checkList.activeDate = this.activeDate;
        this.checkList.billsDueDate = this.billsDueDate;
        this.checkList.requestedDate = this.resquestedDate;
        console.log(checkList);
    }
    changeActive(): void {
        this.checkList.active = this.checkList.active ? false : true;
    }
    changeBillsDue(): void {
        this.checkList.billsDue = this.checkList.billsDue ? false : true;
    }
    changeRequest(): void {
        this.checkList.request = this.checkList.request ? false : true;
    }
}

export class CheckListDetails implements CheckList {
    constructor(public checklistid: number,
        public chipsVendorId: string,
        public active: boolean,
        public activeDate: Date,
        public billsDue: boolean,
        public billsDueDate: Date,
        public request: boolean,
        public requestedDate: Date) { }
}