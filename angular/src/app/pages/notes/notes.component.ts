import { Component, OnInit, Input } from "@angular/core";
import { NotesService } from "./notes.service";
import { Notes } from "./notes";

@Component({
    selector: 'notes-info',
    templateUrl: './notes.component.html',
    providers: [NotesService]
})
export class NotesComponent implements OnInit {
    constructor(private notesService: NotesService) { }
    cols: any[];
    noteDetails: Array<NotesDetails> = [];
    display: boolean = false;
    createdOn: Date;
    modifiedOn: Date;
    @Input()
    notes: NotesDetails;

    showDialog(noteDetail: NotesDetails) {
        this.display = true;
        this.notes = noteDetail;
        console.log("show", this.notes);
    }
    ngOnInit() {
        this.notesService.getNotesInformation().then(x => {
            this.noteDetails = x;
            console.log("noteDetails", this.noteDetails);
        });

        this.cols = [
            { field: 'notesId', header: 'Note Id ' },
            { field: 'createdBy', header: 'Created By' },

        ];

    }
    saveOrderInformation(notes: any): void {
        this.display = false;
        notes.createdOn = this.createdOn;
        notes.modifiedOn = this.modifiedOn;
        console.log("called", notes);
    }

}

export class NotesDetails implements Notes {
    constructor(public notesId: number, public createdBy: string, public createdOn: Date,
        public modifiedBy: string, public modifiedOn: Date, public notes: string
    ) {

    }
}