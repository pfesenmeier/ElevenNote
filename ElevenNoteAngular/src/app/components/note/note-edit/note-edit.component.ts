import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  note: Note;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.noteService.getNote(params.get('id')).subscribe((note: Note) => {
        this.note = note;
        this.createForm();
      });
    });
   }

  ngOnInit() {
  }

  createForm() {
    this.editForm = this.formBuilder.group({
      NoteId: new FormControl(this.note.NoteId),
      Title: new FormControl(this.note.Title),
      Content: new FormControl(this.note.Content),
      IsStarred: new FormControl(this.note.IsStarred)
    });
  }

  onSubmit() {
    const updatedNote: Note = {
      NoteId: this.editForm.value.NoteId,
      Title: this.editForm.value.Title,
      Content: this.editForm.value.Content,
      IsStarred: this.editForm.value.IsStarred
    };
    console.log(updatedNote.NoteId);
    console.log(updatedNote.Title);
    this.noteService.updateNote(updatedNote).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }

}
