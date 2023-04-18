import { CollectionDTO } from "../../../DTOs/ColletionDTO"
import { ICollectionRepository } from "../../../repositories/web/ICollectionRepository"


export class CreateCollectionService{

    constructor(private _iCollectionRepository:ICollectionRepository){}
    
    async execute(data:CollectionDTO):Promise<CollectionDTO>{        
        
        const createdCollection = await this._iCollectionRepository.createCollection(data)
        return createdCollection
    }
}