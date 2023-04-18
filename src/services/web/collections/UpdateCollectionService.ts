import { UpdateCollectionDTO } from './../../../DTOs/UpdateCollectionDTO';
import { ICollectionRepository } from './../../../repositories/web/ICollectionRepository';


export class UpdateCollectionService{

   
    
    constructor(private _iCollectionRepository:ICollectionRepository){}
    
    async execute(data:UpdateCollectionDTO):Promise<UpdateCollectionDTO>{        
        
        const updatedCollection = await this._iCollectionRepository.updateCollection(data)
        return updatedCollection
    }
}