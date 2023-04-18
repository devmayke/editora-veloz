import { Router } from 'express';
import { AssetController } from '../controllers/web/assets/AssetController';
import { BookController } from '../controllers/web/books/BookController';
import { LoginController } from './../controllers/web/LoginController';



class WebRoutes {
    private _router:Router= Router()  
    private _loginController:LoginController = new LoginController()   
    private _BookController:BookController = new BookController()  
    private _assetController:AssetController = new AssetController()
    
    login(prefixPath:string = "/"){   
        return this._router.post(prefixPath, this._loginController.handler)
    }


    createBook(prefixPath:string = "/"){   
        return this._router.post(prefixPath, this._BookController.createBook())
    }

    listBook(prefixPath:string = "/"){
        return this._router.get(prefixPath, this._BookController.listBook())

    }

    updateBook(prefixPath:string = "/"){
        return this._router.put(prefixPath, this._BookController.updateBook())

    }

    deleteBook(prefixPath:string = "/:id"){
        return this._router.delete(prefixPath, this._BookController.deleteBook())

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







