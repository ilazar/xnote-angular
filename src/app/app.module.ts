import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NoteEditComponent } from './note-edit/note-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
