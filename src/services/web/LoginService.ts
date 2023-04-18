import { UserDTO } from './../../DTOs/UserDTO';
import User from "../../entities/User"
import { IWebRepository} from "../../repositories/web/IWebRepository"

export class LoginService{

    constructor(private _iWebRepository:IWebRepository){}
    
    async execute(data:UserDTO):Promise<User>{

        const loginSuccessful = await this._iWebRepository.login(data)
        return loginSuccessful     

    }
}