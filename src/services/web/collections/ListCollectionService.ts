import { ICollectionRepository } from './../../../repositories/web/ICollectionRepository';


export class ListCollectionService{

    constructor(private _iCollectionRepository:ICollectionRepository){}
    
    async execute():Promise<string>{  
        const listCollection = await this._iCollectionRepository.listCollection()
        return listCollection

    }
}