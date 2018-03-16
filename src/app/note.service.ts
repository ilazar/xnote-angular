import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Note } from './note';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {

  private noteUrl = 'http://localhost:3000/api/note';

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.noteUrl);
  }
  // getNotes(): Observable<Note[]> {
  //   return this.http.get<Note[]>(this.noteUrl).pipe(
  //     tap(_ => this.log(`fetched notes`)),
  //     catchError(this.handleError('getNotes', []))
  //   );
  // }

  getNote(id: string): Observable<Note> {
    const url = `${this.noteUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => this.log(`fetched note id=${id}`)),
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.noteUrl, note, httpOptions).pipe(
      tap((n: Note) => this.log(`created note id=${n._id}`)),
      catchError(this.handleError<Note>('createNote'))
    );
  }

  updateNote (note: Note): Observable<any> {
    return this.http.put(this.noteUrl, note, httpOptions).pipe(
      tap(_ => this.log(`updated note id=${note._id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }

  deleteNote (note: Note | number): Observable<Note> {
    const id = typeof note === 'number' ? note : note._id;
    const url = `${this.noteUrl}/${id}`;
    return this.http.delete<Note>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`NoteService: ${message}`);
  }
}
