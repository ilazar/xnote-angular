import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NoteService {

  notes: Note[] = [];

  constructor() {
  }

  createNote(note: Note): Observable<Note> {
    this.notes.push({...note, id: `${this.notes.length + 1}`});
    return of(note);
  }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  getNote(id: string) {
    return of(this.notes.find(note => note.id === id));
  }
}
