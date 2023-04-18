import { UserDTO } from "../DTOs/UserDTO";

export default interface IUserRepository{

    create(data:UserDTO):Promise<UserDTO>

}