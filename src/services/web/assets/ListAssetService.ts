import { AssetDTO } from './../../../DTOs/AssetDTO';
import { IAssetRepository } from '../../../repositories/web/IAssetRepository';

export class ListAssetService{

    constructor(private _iAssetRepository:IAssetRepository){}
    
    async execute():Promise<AssetDTO[]>{           
        
        const listAsset = await this._iAssetRepository.listAsset()

        return listAsset
    }
}