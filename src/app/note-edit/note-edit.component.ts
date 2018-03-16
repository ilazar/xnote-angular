import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Note } from '../note';
import { NoteService } from '../note.service';
import { Subscription } from 'rxjs/Subscription';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit, OnDestroy {
  title: string;
  note: Note;
  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private noteService: NoteService,
              private location: Location) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.title = 'Edit';
      this.noteService.getNote(id)
        .subscribe(note => this.note = note);
    } else {
      this.title = 'New';
      this.note = new Note();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  save(): void {
    const fn = this.note._id ? this.noteService.updateNote : this.noteService.createNote;
    this.subscriptions.push(
      fn(this.note).subscribe(() => this.goBack())
    );
  }

  goBack() {
    this.location.back();
  }
}
