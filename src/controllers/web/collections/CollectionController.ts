import { UpdateCollectionController } from './UpdateCollectionController';
import { ListCollectionController } from './ListCollectionController';
import { DeleteCollectionController } from './DeleteCollectionController';
import { CreateCollectionController } from './CreateCollectionController';

export class CollectionController {

    private _createCollection: CreateCollectionController = new CreateCollectionController()
    private _deleteCollection: DeleteCollectionController = new DeleteCollectionController()
    private _updateCollection: UpdateCollectionController = new UpdateCollectionController()
    private _listCollection: ListCollectionController = new ListCollectionController()

    createCollection(){
        return this._createCollection.handler
    }
    
    listCollection(){
        return this._listCollection.handler
    }

    updateCollection(){
        return this._updateCollection.handler
    }

    deleteCollection(){
        return this._deleteCollection.handler
    }
}