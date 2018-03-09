import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  newNote: Note = new Note();
  selectedNote: Note;
  notes: Note[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.notes.push(this.newNote);
    this.newNote = new Note();
  }

  onSelect(note: Note) {
    this.selectedNote = note;
  }
}
