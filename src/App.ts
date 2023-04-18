import express from 'express'
import ErrorHandler from './middlewares/ErrorHandler'
import { router } from './routes/WebRoutes'

export default class App {
    private _app: express.Application
    private _PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000

    constructor() {
        console.log("\n")
        this._app = express()
        this.midlewares()
        this.routes()
        this.errorHandler()
        
    }

    routes() {
        this._app.use("/", router.login("/login"))

        this._app.use("/", router.createCollection("/collections"))
        this._app.use("/", router.listCollection("/collections"))
        this._app.use("/", router.updateCollection("/collections"))
        this._app.use("/", router.deleteCollection("/collections/:id"))

        this._app.use("/", router.createAsset("/assets"))
        this._app.use("/", router.listAsset("/assets"))
        this._app.use("/", router.updateAsset("/assets"))
        this._app.use("/", router.deleteAsset("/assets/:id"))
        // this._app.use("/grouproutes", router.groupRoutes())
        
        console.info(">   Rotas carregadas")
    }

    midlewares() {
        this._app.use(express.json())    
        console.info(">   Middlewares carregados")
    }

    errorHandler(){
        this._app.use(ErrorHandler)
    }

    listen(lPORT?: number, cb?: () => void) {
        if (lPORT) this._PORT = lPORT
        this._app.listen(this._PORT)
        if (cb) cb()
        console.info(`>   Servidor iniciado em http://localhost:${this._PORT}`)
    }
}
