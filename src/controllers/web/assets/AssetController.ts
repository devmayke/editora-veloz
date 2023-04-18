import { DeleteAssetController } from './DeletAssetController';
import { ListAssetController } from './ListAssetController';
import { AssetDTO } from '../../../DTOs/AssetDTO';
import { CreateAssetController } from './CreateAssetController';
import { UpdateAssetController } from './UpdateAssetController';



export class AssetController {
    private _createAssetController:CreateAssetController = new CreateAssetController()
    private _listAssetController: ListAssetController = new ListAssetController()
    private _updateAssetController: UpdateAssetController = new UpdateAssetController()
    private _deleteAssetController:DeleteAssetController = new DeleteAssetController()

    createAsset(){
        return this._createAssetController.handle
    }

    listAsset(){
        return this._listAssetController.handle
    }

    updateAsset(){
        return this._updateAssetController.handle
    }
    
    deleteAsset(){
        return this._deleteAssetController.handle
    }
}