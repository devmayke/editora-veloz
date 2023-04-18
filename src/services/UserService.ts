import { UserDTO } from './../DTOs/UserDTO';
import IUserRepository from "../repositories/IUserRepository";

export default class UserService{
    constructor(private iUserRepository:IUserRepository){}   
    execute(data:UserDTO):UserDTO{
        this.iUserRepository.create(data)
        return data
    }
}