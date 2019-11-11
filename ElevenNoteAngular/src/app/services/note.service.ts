import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';

const Api_Url = 'https://localhost:44377/';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get(`${Api_Url}/api/note`, { headers: this.getHeaders() });
  }

  createNote(note: Note){
    return this.http.post(`${Api_Url}/api/note`, note, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
