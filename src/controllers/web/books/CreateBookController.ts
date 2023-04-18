import { status } from './../../../helpers/errors/httpStatus';
import { CreateBookService } from './../../../services/web/books/CreateBookService';
import { BookController } from './BookController';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class CreateBookController{

    async handler(req:Request, res:Response){

        const title = req.body?.title
        const description = req.body?.description
        const category = req.body?.category


        const book = new CreateBookService(new MYSQL())

        const createdBook = await book.execute({title, description, category})

        return res.status(status.OK).json(createdBook)

        

    }

}