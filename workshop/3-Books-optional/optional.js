const body = document.getElementById('body');
const bookShelf = document.getElementById('bookShelf');
const readingNow = document.getElementById('currentlyReading');
const finishedReading = document.getElementById('finishedReading');



//INDEX  A UL TO THE HTML//
  // LI for x number  of books. to be updated with each new book//
   ///"Sort" books by genre///
    //Each book to be in a 'box', first represented by an image of the cover of the book. //
      //box contains HIDDEN infos. On click show (SEE BIG BOSS(hide/show methods)): title, genre, author, read, startReadDate, endReadDate,//

///ADDING NEW books
   ////Set a form where you input: title, genre, author, read, startReadDate, endReadDate///
      ////Genre of the book defines where it is added in the list ///


class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
        this.startReadDate = startReadDate || null;
        this.endReadDate = endReadDate || null;
    }
}

class BookList {
    constructor() {
        this.read = 0;
        this.unread = 0;
        this.upNext = null;
        this.currentlyReading = null;
        this.lastRead = null;
        this.books = []
    }

    add = (book) => {
        this.books.push(book);
        if (book.read) {
            this.read += 1;
        } else {
            this.unread += 1;
        }
    }
    startReading = (title) =>{
        this.currentlyReading = title;
        this.startReadDate = new Date(Date.now());
    }
    finishReading = (title) =>{
        this.lastRead = title;
        this.lastRead = new Date(Date.now())
        book.read = true;
        this.read += 1;
        this.unread -=1;
    }
}

const homeLibrary = new BookList();

homeLibrary.add(new Book('The Essence of Shinto', 'Spiritual', 'Motohisa Yamakage'));
homeLibrary.add(new Book('Sapiens', 'Anthropology', 'Yuval Noah Harari'));
homeLibrary.add(new Book('Make Your Bed ', 'Self Help', 'Marijn Haverbeke'));
homeLibrary.add(new Book('Foundation', 'Science-Fiction', 'Isaac Asimov'));
homeLibrary.add(new Book('Madame Bovary', 'Novel', 'Gustave Flaubert'));
homeLibrary.add(new Book('Le rêve de Champlain', 'Biography', 'David Hackett Fischer'));
homeLibrary.add(new Book('Mort à Crédit', 'Fiction', 'Céline'));

console.log(homeLibrary);