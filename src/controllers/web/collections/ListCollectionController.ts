import { ListCollectionService } from './../../../services/web/collections/ListCollectionService';

import { status } from '../../../helpers/errors/httpStatus';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class ListCollectionController{

    async handler(req:Request, res:Response){


        const book = new ListCollectionService(new MYSQL())
        const listCollection = await book.execute()
        res.status(status.OK).json(listCollection)



        

    }

}