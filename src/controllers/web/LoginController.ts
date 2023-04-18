import { UserDTO } from './../../DTOs/UserDTO';
import { LoginService } from './../../services/web/LoginService';
import { Response, Request } from 'express';
import { MYSQL } from '../../infra/MYSQL';


export class LoginController{

    async handler(req:Request, res:Response){   


        const loginService = new LoginService(new MYSQL())

        const {name, password} = req.body

        const user:UserDTO ={name, password}

        const result = await loginService.execute(user)

        res.status(200).json(result)
        
        

    }
}