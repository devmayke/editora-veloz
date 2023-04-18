import { status } from './../../../helpers/errors/httpStatus';
import { DeleteBookService } from './../../../services/web/books/DeleteBookService';
import { Ivalidator } from './../../../helpers/validators/IValidator';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class DeleteBookController{

    async handler(req:Request, res:Response){

        const id = req.params?.id

        const book = new DeleteBookService(new MYSQL())

        const deletedBook = await book.execute(Number(id))

        res.status(status.OK).json(deletedBook)


        

    }

}