import { IAssetRepository } from './../../../repositories/web/IAssetRepository';
import { UpdateAssetDTO } from './../../../DTOs/UpdateAssetDTO';
import { AssetDTO } from './../../../DTOs/AssetDTO';

export class UpdateAssetService{

    constructor(private _iAssetRepository:IAssetRepository){}
    
    async execute(data:UpdateAssetDTO):Promise<AssetDTO>{   

        const updateAsset = await this._iAssetRepository.updateAsset(data)
        return updateAsset
    }
}