import { ValidatorLibAdapter } from './../../../helpers/validators/ValidatorLibAdapter';
import { status } from './../../../helpers/errors/httpStatus';
import { MYSQL } from './../../../infra/MYSQL';
import { CreateAssetService } from './../../../services/web/assets/CreateAssetService';
import { Request, Response } from "express";

export class CreateAssetController {
    async handle(req:Request, res:Response){      

        const name = req.body?.name
        const description = req.body?.description
        const qr_code = req.body?.qrCode
        const android = req.body?.android
        const ios = req.body?.ios

        const asset = new CreateAssetService(new MYSQL())
        asset.setValidator(new ValidatorLibAdapter())
        try{
            asset.validate({name, description, qr_code, android, ios})
            const createdAsset = await asset.execute({name, description, qr_code, android:android, ios:ios})
            return res.status(status.CREATED).json(createdAsset)       
        }catch(e:any){
            return res.status(status.CREATED).json({msg:e.message})   
        }
    }
}