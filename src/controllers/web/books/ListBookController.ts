import { ListBookService } from './../../../services/web/books/ListBookService';
import { status } from './../../../helpers/errors/httpStatus';
import { BookController } from './BookController';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class ListBookController{

    async handler(req:Request, res:Response){


        const book = new ListBookService(new MYSQL())
        const listBook = await book.execute()
        res.status(status.OK).json(listBook)



        

    }

}