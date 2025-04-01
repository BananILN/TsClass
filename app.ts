interface IBook {
    getTitle(): string;
    checkout(): void;
}

abstract class Book implements IBook {
    protected constructor(
        protected readonly title: string,
        protected readonly author: string,
        protected readonly year: number
    ) {}

    public abstract checkout(): void;

    public getTitle(): string {
        return this.title;
    }
}

class LibraryBook extends Book {
    constructor(title: string, author: string, year: number) {
        super(title, author, year);
    }

    public checkout(): void {
        console.log(`Книга "${this.title}" выдана на руки`);
    }
}

class DigitalBook extends Book {
    constructor(title: string, author: string, year: number) {
        super(title, author, year);
    }

    public checkout(): void {
        console.log(`Книга "${this.title}" загружена на устройство`);
    }
}

class Library {
    private books: IBook[] = [];

    public addBook(book: IBook): void {
        this.books.push(book);
    }

    public checkoutBook(title: string): void {
        const book = this.books.find(b => b.getTitle() === title);
        if (book) {
            book.checkout();
        } else {
            console.log(`Книга с названием "${title}" не найдена в библиотеке`);
        }
    }
}

const library = new Library();

const warAndPeace = new LibraryBook('Война и мир', 'Лев Толстой', 1869);
const digitalBook = new DigitalBook('TypeScript для профессионалов', 'Джон Доу', 2023);

library.addBook(warAndPeace);
library.addBook(digitalBook);


library.checkoutBook('Война и мир');      
library.checkoutBook('TypeScript для профессионалов'); 
library.checkoutBook('Несуществующая книга'); 