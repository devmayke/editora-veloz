import { status } from './../../../helpers/errors/httpStatus';
import { DeleteAssetService } from './../../../services/web/assets/DeleteAssetService';
import { Request, Response } from "express";
import { MYSQL } from '../../../infra/MYSQL';

export class DeleteAssetController{

    async handle(req:Request, res:Response){

        const id = req.params?.id


        const asset = new DeleteAssetService(new MYSQL())

        const deletedAsset = await asset.execute(Number(id))
        res.status(status.OK).json(deletedAsset)

    }
}