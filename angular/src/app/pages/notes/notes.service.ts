import { HttpClient } from '@angular/common/http';
import { Notes } from './notes';
import { Injectable } from '@angular/core';
import { NotesDetails } from './notes.component';

@Injectable()
export class NotesService {
    /**
     *
     */
    constructor(private http: HttpClient) {

    }
    getNotesInformation(): any {
        return this.http.get<any>('assets/data/vendor.json')
            .toPromise()
            .then(res => <NotesDetails>res.notes)
            .then(notes => {
                console.log(notes);
                return notes;
            });
    }
}