import { BookDTO } from "../../../DTOs/BookDTO";
import { IBookRepository } from "../../../repositories/web/IBookRepository";
import { IWebRepository } from "../../../repositories/web/IWebRepository";

export class ListBookService{

    constructor(private _iBookRepository:IBookRepository){}
    
    async execute():Promise<string>{  
        const listBook = await this._iBookRepository.listBook()
        return listBook

    }
}