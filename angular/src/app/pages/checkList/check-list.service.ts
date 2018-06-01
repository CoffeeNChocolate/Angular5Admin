import { HttpClient } from "@angular/common/http";
import { CheckList } from "./ckeck-list";
import { Injectable } from "@angular/core";
@Injectable()
export class CheckListService {
    constructor(private http: HttpClient) {

    }
    getCheckListDetails() {
        return this.http.get<any>('assets/data/vendor.json')
            .toPromise()
            .then(res => <CheckList>res.checklist)
            .then(checklist => {
                console.log(checklist);
                return checklist;
            });
    }
}