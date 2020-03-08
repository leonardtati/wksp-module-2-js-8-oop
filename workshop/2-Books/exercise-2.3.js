// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.
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
        this.booksRead = 0;
        this.bookUnread = 0;
        this.books = [];
        this.lastRead = null;
        this.currentBook = null;
        this.upNext = null;
    }
    
    add = (book) => {
        this.books.push(book);
        if(book.read){
            this.read += 1;
        }
            
            else{
                this.unread += 1;
            }
            
        }
    
}
let homeLibrary = new BookList();

console.log(homeLibrary);

homeLibrary.add(new BookList('sdfsdfsdf', 'akakakaka', 'Les piliers de la terre'));
homeLibrary.add(new BookList('sfffkfkf', 'akakvccvcka', 'Les pooors de la terre'));
homeLibrary.add(new BookList('sdeeeedfsdf', 'annnnkaka', 'Les puuuus de la terre'));
homeLibrary.add(new BookList('shhhhhfsdf', 'akawwwwka', 'Les piliers klklklk terre'));
homeLibrary.add(new BookList('smkmkmfsdf', 'akqwqwkaka', 'Les pillolos de la terre'));

console.log(homeLibrary);