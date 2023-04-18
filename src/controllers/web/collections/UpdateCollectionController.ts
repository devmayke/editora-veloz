import { UpdateCollectionService } from './../../../services/web/collections/UpdateCollectionService';
import { status } from '../../../helpers/errors/httpStatus';
import { MYSQL } from '../../../infra/MYSQL';
import { Request, Response } from "express";


export class UpdateCollectionController{

    async handler(req:Request, res:Response){     

        const id = req.body?.id
        const title= req.body?.title
        const description = req.body?.description
        const category = req.body?.category

        const book = new UpdateCollectionService(new MYSQL())

        const updatedCollection = await book.execute({id:Number(id), title, description, category})

        res.status(status.OK).json(updatedCollection)




        

    }

}