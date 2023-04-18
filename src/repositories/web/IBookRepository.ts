import { UpdateBookDTO } from './../../DTOs/UpdateBookDTO';
import { BookDTO } from './../../DTOs/BookDTO';
export interface IBookRepository {

    createBook(data:BookDTO):Promise<BookDTO>

    listBook():Promise<string>

    updateBook(data:UpdateBookDTO):Promise<UpdateBookDTO>

    deleteBook(id:number):Promise<BookDTO>

}