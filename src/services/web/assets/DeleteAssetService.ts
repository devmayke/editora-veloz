import { AssetDTO } from './../../../DTOs/AssetDTO';
import { IAssetRepository } from '../../../repositories/web/IAssetRepository';

export class DeleteAssetService{

    constructor(private _iAssetRepository:IAssetRepository){}
    
    async execute(id:number):Promise<AssetDTO>{         
        
        const deletedAsset = await this._iAssetRepository.deleteAsset(id)
        return deletedAsset 
    }
}