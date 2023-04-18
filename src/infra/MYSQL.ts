import { UpdateCollectionDTO } from './../DTOs/UpdateCollectionDTO';
import { CollectionDTO } from './../DTOs/ColletionDTO';
import { ICollectionRepository } from './../repositories/web/ICollectionRepository';
import { UpdateAssetDTO } from './../DTOs/UpdateAssetDTO';
import { UserDTO } from './../DTOs/UserDTO';
import User from '../entities/User';
import { IWebRepository } from './../repositories/web/IWebRepository';
import { IAssetRepository } from '../repositories/web/IAssetRepository';
import { AssetDTO } from '../DTOs/AssetDTO';

export class MYSQL implements IWebRepository, ICollectionRepository, IAssetRepository{

    async createAsset(data: AssetDTO): Promise<AssetDTO> {  
        return data
    }
    
    async listAsset(): Promise<AssetDTO[]> {

        const listMock:AssetDTO = {
            name:"",
            description:"",
            qr_code:"",
            android: 'false',
            ios:'false'
        }        
        return [listMock]
    }
    
    async updateAsset(data:UpdateAssetDTO): Promise<AssetDTO> {
             
        return data as AssetDTO
    }

    async deleteAsset(id:number): Promise<AssetDTO> {
        const mockAsset:AssetDTO= {
            name:"", 
            description:"", 
            qr_code:"", 
            android:'false', 
            ios:'true' 
        }
        return mockAsset   
    }

    async login(user: UserDTO): Promise<User> {
        const { name, password }  = user
        // const select = `
        //   SELECT users.id, users.username, roles.id as role_id, roles.name as role_name, rights.id as right_id, rights.name as right_name
        //   FROM users
        //   JOIN roles ON users.role_id = roles.id
        //   JOIN role_rights ON roles.id = role_rights.role_id
        //   JOIN rights ON role_rights.right_id = rights.id
        //   WHERE users.username = ?
        // `
        // db.query(select, [username], (err, result) => {
        //     if (err) {
        //         throw err;
        //     }
        //     console.log(result);
        //     return result
        // });

        return new User(user)        
    }

    async createCollection(data:CollectionDTO): Promise<CollectionDTO> {
        return data        
    }

    async listCollection(): Promise<string> {
    
        return "listando livros"
    }
    async updateCollection(data:UpdateCollectionDTO): Promise<UpdateCollectionDTO> {
        return data        
    }

    async deleteCollection(id:number): Promise<CollectionDTO> {
        const mockCollection:CollectionDTO = {title:"", description:"", category:''}
        return mockCollection        
    }



}