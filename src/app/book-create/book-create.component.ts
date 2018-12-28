import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  name: FormControl = new FormControl("", Validators.required);
  isbn: FormControl = new FormControl("", Validators.required);
  full_name: FormControl = new FormControl("", Validators.required)
  // authors_fa: FormArray = new FormArray(
  //   [this.full_name],
  // );

  createForm: FormGroup = new FormGroup({
    name: this.name,
    isbn: this.isbn,
    // authors: this.authors_fa
  });

  constructor(private data: DataService) {}

  ngOnInit() {
    console.log(this.createForm.value)
  }

  createBook() {
    this.data.createBook(this.createForm.value).subscribe();
    // console.log(this.createForm.value)
  }
  
  // get authors() {
  //   return this.createForm.get('authors') as FormArray;
  // }
// 
  // addAuthor() {
  //   this.authors.push(new FormControl('', Validators.required));
  // }

  // Add splice method for deleting authors from list
}
