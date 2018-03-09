import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note = new Note();

  @Output()
  add: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.add.emit(this.note);
    this.note = new Note();
  }
}
