import { Author } from './author';

export class Book{
    id: number;
    title: string;
    author: Author;
    description: string;

    constructor(id,title,author,description){
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
    }
}