import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: Note;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private noteService: NoteService,
              private location: Location) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => this.note = note);
  }

  edit(note: Note) {
    this.router.navigate(['edit', `${note._id}`]);
  }

  goBack() {
    this.location.back();
  }
}
