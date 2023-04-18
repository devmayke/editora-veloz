import { UserDTO } from "../../DTOs/UserDTO";
import User from "../../entities/User";

export interface IWebRepository {

    login(data:UserDTO):Promise<User>



}