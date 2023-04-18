import { BookDTO } from './../../../DTOs/BookDTO';
import { IBookRepository } from './../../../repositories/web/IBookRepository';

export class CreateBookService{

    constructor(private _iBookRepository:IBookRepository){}
    
    async execute(data:BookDTO):Promise<BookDTO>{        
        
        const createdBook = await this._iBookRepository.createBook(data)
        return createdBook
    }
}