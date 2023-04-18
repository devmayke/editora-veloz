import { status } from './../../../helpers/errors/httpStatus';
import { MYSQL } from './../../../infra/MYSQL';
import { Request, Response } from "express";
import { UpdateBookService } from "../../../services/web/books/UpdateBookService";

export class UpdateBookController{

    async handler(req:Request, res:Response){     

        const id = req.body?.id
        const title= req.body?.title
        const description = req.body?.description
        const category = req.body?.category

        const book = new UpdateBookService(new MYSQL())

        const updatedBook = await book.execute({id:Number(id), title, description, category})

        res.status(status.OK).json(updatedBook)




        

    }

}