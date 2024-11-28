# Angular-Library-Grid
Activity 32: Angular Library Grid

Create the Book Model

Book model that includes the necessary fields for each book, including the rating.

export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    coverImage: string;
  }

  Book Component

BookComponent to display the list of books, handle adding new books, and manage the removal of books.
This component also contains logic for displaying the rating in star format.

import { Component, OnInit } from '@angular/core';
import { Book } from '../../book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit{
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
}

Book Service

a service to handle adding and removing books. This service can maintain a simple array of books.

import { Injectable } from '@angular/core';
import { Book } from '../book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    { id: 1, title: 'SOLO LEVELING', author: 'H-GOON', genre: 'ACTION, FANTASY', year: 2023, coverImage: 'assets/img/SOLO.jpg' },
    { id: 2, title: 'ONE PIECE', author: 'EIICHIRO ODA', genre: 'ACTION, FANTASY', year: 1997, coverImage: 'assets/img/ONE.jpeg' },
    { id: 3, title: 'ONE PUNCH MAN', author: 'YUSUKE MURATA', genre: 'ACTION, FANTASY', year: 2009, coverImage: 'assets/img/OP.jpeg' },
    { id: 4, title: 'HUNTER X HUNTER', author: 'YOSHIHIRO TOGASHI', genre: 'ACTION, FANTASY', year: 1998, coverImage: 'assets/img/hunter.jpg' },
    { id: 5, title: 'SLAM DUNK', author: 'TAKEHIKO INOUE', genre: 'SPORTS, COMEDY AND DRAMA', year: 1990, coverImage: 'assets/img/SD.JPEG' }
  ];

  getBooks(): Book[] {

 
    return this.books;
  }
}

 OUTPUT:

  ![image](https://github.com/user-attachments/assets/d95f0d2d-5618-44c4-9eb3-fbd0c0ee8da1)


