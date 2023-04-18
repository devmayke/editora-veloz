import { UpdateAssetDTO } from './../DTOs/UpdateAssetDTO';
import { BookDTO } from './../DTOs/BookDTO';
import { IBookRepository } from './../repositories/web/IBookRepository';
import { UserDTO } from './../DTOs/UserDTO';
import User from '../entities/User';
import { IWebRepository } from './../repositories/web/IWebRepository';
import { UpdateBookDTO } from '../DTOs/UpdateBookDTO';
import { IAssetRepository } from '../repositories/web/IAssetRepository';
import { AssetDTO } from '../DTOs/AssetDTO';

export class MYSQL implements IWebRepository, IBookRepository, IAssetRepository{

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

    async createBook(data:BookDTO): Promise<BookDTO> {
        return data        
    }

    async listBook(): Promise<string> {
    
        return "listando livros"
    }
    async updateBook(data:UpdateBookDTO): Promise<UpdateBookDTO> {
        return data        
    }

    async deleteBook(id:number): Promise<BookDTO> {
        const mockBook:BookDTO = {title:"", description:"", category:''}
        return mockBook        
    }



}