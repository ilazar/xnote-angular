import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  selectedNote: Note;
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  onAdd(note: Note) {
    this.noteService.createNote(note);
  }

  onSelect(note: Note) {
    this.selectedNote = note;
  }
}
