import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  notes: Note[];

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.noteService.getNotes()
      .subscribe(notes => this.notes = notes, console.log)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  remove(note: Note): void {
    this.subscriptions.push(this.noteService.deleteNote(note).subscribe());
  }
}
