import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {

  note: Note;

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.noteService.getNote(params.get('id')).subscribe((note: Note) =>{
        this.note = note;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this.noteService.deleteNote(this.note.NoteId).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }

}
