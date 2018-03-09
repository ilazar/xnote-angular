import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  selectedNote: Note;
  notes: Note[] = [];

  constructor() { }

  ngOnInit() {
  }

  onAdd(note: Note) {
    this.notes.push(note);
  }

  onSelect(note: Note) {
    this.selectedNote = note;
  }
}
