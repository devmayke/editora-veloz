import { ListAssetService } from './../../../services/web/assets/ListAssetService';
import { Request, Response } from 'express';
import { MYSQL } from '../../../infra/MYSQL';
import { status } from '../../../helpers/errors/httpStatus';
export class ListAssetController {

    async handle(req: Request, res: Response) {

        const asset = new ListAssetService(new MYSQL())
        const listAsset = await asset.execute()
        res.status(status.OK).json(listAsset)
    }
}