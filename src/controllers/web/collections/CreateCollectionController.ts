import { CreateCollectionService } from './../../../services/web/collections/CreateCollectionService';
import { status } from '../../../helpers/errors/httpStatus';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class CreateCollectionController{

    async handler(req:Request, res:Response){

        const title = req.body?.title
        const description = req.body?.description
        const category = req.body?.category


        const book = new CreateCollectionService(new MYSQL())

        const createdCollection = await book.execute({title, description, category})

        return res.status(status.OK).json(createdCollection)

        

    }

}