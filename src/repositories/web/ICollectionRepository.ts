import { CollectionDTO } from '../../DTOs/ColletionDTO';
import { UpdateCollectionDTO } from '../../DTOs/UpdateCollectionDTO';
export interface ICollectionRepository {

    createCollection(data:CollectionDTO):Promise<CollectionDTO>

    listCollection():Promise<string>

    updateCollection(data:UpdateCollectionDTO):Promise<UpdateCollectionDTO>

    deleteCollection(id:number):Promise<CollectionDTO>

}