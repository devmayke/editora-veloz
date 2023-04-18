import { UpdateAssetDTO } from './../../../DTOs/UpdateAssetDTO';
import { MYSQL } from './../../../infra/MYSQL';
import { UpdateAssetService } from './../../../services/web/assets/UpdateAssetService';
import { AssetController } from './AssetController';
import { Request, Response } from "express";
import { status } from '../../../helpers/errors/httpStatus';

export class UpdateAssetController {
    async handle(req:Request, res:Response){

        const updateAsset:UpdateAssetDTO = {
            id:Number(req.body?.id),
            name:req.body?.name,
            description:req.body?.description,
            qr_code:req.body?.qrCode,
            android:req.body?.android,
            ios:req.body?.ios
        }

        const asset = new UpdateAssetService(new MYSQL())
        const updatedAsset = await asset.execute(updateAsset)

        res.status(status.OK).json(updateAsset)

    }
}