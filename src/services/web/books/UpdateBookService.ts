import { UpdateBookDTO } from './../../../DTOs/UpdateBookDTO';

import { IBookRepository } from '../../../repositories/web/IBookRepository';

export class UpdateBookService{

   
    
    constructor(private _iBookRepository:IBookRepository){}
    
    async execute(data:UpdateBookDTO):Promise<UpdateBookDTO>{        
        
        const updatedBook = await this._iBookRepository.updateBook(data)
        return updatedBook
    }
}