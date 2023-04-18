import { CollectionDTO } from "../../../DTOs/ColletionDTO"
import { ICollectionRepository } from "../../../repositories/web/ICollectionRepository"


export class DeleteCollectionService{

    constructor(private _iCollectionRepository:ICollectionRepository){}
    
    async execute(id:number):Promise<CollectionDTO>{   

        const deletedCollection = await this._iCollectionRepository.deleteCollection(id)
        return deletedCollection
        
        

    }
}