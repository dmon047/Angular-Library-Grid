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
