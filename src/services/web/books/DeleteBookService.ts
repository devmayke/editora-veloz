import { BookDTO } from "../../../DTOs/BookDTO";
import { IBookRepository } from "../../../repositories/web/IBookRepository";

export class DeleteBookService{

    constructor(private _iBookRepository:IBookRepository){}
    
    async execute(id:number):Promise<BookDTO>{   

        const deletedBook = await this._iBookRepository.deleteBook(id)
        return deletedBook
        
        

    }
}