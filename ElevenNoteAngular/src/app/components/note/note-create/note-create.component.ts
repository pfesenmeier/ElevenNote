import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  private noteForm: FormGroup;

  constructor(private form: FormBuilder, private noteService: NoteService, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.noteForm = this.form.group({
      Title: new FormControl,
      Content: new FormControl
    });
  }

  onSubmit() {
    console.log(this.noteForm.value);
    this.noteService.createNote(this.noteForm.value).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }

}
