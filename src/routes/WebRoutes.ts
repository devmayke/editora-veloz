import { Router } from 'express';
import { AssetController } from '../controllers/web/assets/AssetController';
import { CollectionController } from '../controllers/web/collections/CollectionController';
import { LoginController } from './../controllers/web/LoginController';



class WebRoutes {
    private _router:Router= Router()  
    private _loginController:LoginController = new LoginController()   
    private _CollectionController:CollectionController = new CollectionController()  
    private _assetController:AssetController = new AssetController()
    
    login(prefixPath:string = "/"){   
        return this._router.post(prefixPath, this._loginController.handler)
    }


    createCollection(prefixPath:string = "/"){   
        return this._router.post(prefixPath, this._CollectionController.createCollection())
    }

    listCollection(prefixPath:string = "/"){
        return this._router.get(prefixPath, this._CollectionController.listCollection())

    }

    updateCollection(prefixPath:string = "/"){
        return this._router.put(prefixPath, this._CollectionController.updateCollection())

    }

    deleteCollection(prefixPath:string = "/:id"){
        return this._router.delete(prefixPath, this._CollectionController.deleteCollection())

    }

    createAsset(prefixPath:string = "/"){
        return this._router.post(prefixPath, this._assetController.createAsset())
    }

    listAsset(prefixPath:string = "/"){
        return this._router.get(prefixPath, this._assetController.listAsset())
    }

    updateAsset(prefixPath:string = "/"){
        return this._router.put(prefixPath, this._assetController.updateAsset())
    }
    deleteAsset(prefixPath:string = "/:id"){
        return this._router.delete(prefixPath, this._assetController.deleteAsset())
    }




    // groupRoutes(prefixPath:string = "/"){
    //     this.userCreate(prefixPath)
    //     this.admin(prefixPath)
    //     return this._router
    // }
}


const router = new WebRoutes()


export {router}







