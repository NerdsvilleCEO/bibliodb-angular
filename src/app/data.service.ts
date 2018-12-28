import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './models/book';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8000/api/books')
  }

  createBook(book: Book): Observable<Book> {
    // Figure out how to configure upstream API host
    return this.http.post<Book>('http://localhost:8000/api/books', book, httpOptions);
  }
}
