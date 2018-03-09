import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NoteService {

  notes: Note[] = [];

  constructor() {
  }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  createNote(note: Note): Observable<Note> {
    this.notes.push(note);
    return of(note);
  }
}
