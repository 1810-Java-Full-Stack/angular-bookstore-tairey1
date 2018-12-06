export class Book{
    id: string;
    title: string;
    author: string;
    description: string;

    constructor(id,title,author,description){
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
    }
}