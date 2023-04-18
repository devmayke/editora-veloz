import { DeleteCollectionService } from './../../../services/web/collections/DeleteCollectionService';
import { status } from '../../../helpers/errors/httpStatus';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class DeleteCollectionController{

    async handler(req:Request, res:Response){

        const id = req.params?.id

        const book = new DeleteCollectionService(new MYSQL())

        const deletedCollection = await book.execute(Number(id))

        res.status(status.OK).json(deletedCollection)


        

    }

}