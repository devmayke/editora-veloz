import { UserDTO } from './../DTOs/UserDTO';
import IUserRepository from "../repositories/IUserRepository";

class Prisma implements IUserRepository {
    async create(data: UserDTO): Promise<UserDTO> {
        return new Promise((resolve, reject)=>resolve(data))        
    }
}

export const dbPrisma  = new Prisma()