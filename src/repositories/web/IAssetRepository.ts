import { UpdateAssetDTO } from './../../DTOs/UpdateAssetDTO';
import { AssetDTO } from "../../DTOs/AssetDTO"

export interface IAssetRepository {

    createAsset(data:AssetDTO):Promise<AssetDTO>

    listAsset():Promise<AssetDTO[]>

    updateAsset(data:UpdateAssetDTO):Promise<AssetDTO>

    deleteAsset(id:number):Promise<AssetDTO>

}