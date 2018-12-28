import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books$: Book[];
  
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getBooks().subscribe(data => {
      this.books$ = data;
    })
  }
}
