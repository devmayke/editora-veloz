import { status } from './../helpers/errors/httpStatus';
import { Request, Response } from "express";
import UserService from "../services/UserService";
import { dbPrisma } from "../infra/Prisma";
import { BadRequestError } from "../helpers/errors/PersonalError";
import User from "../entities/User";

export default class UserController {

    create(req: Request, res: Response) {

        const userService = new UserService(dbPrisma)
        const name: string = req.body?.name
        const password: string = req.body?.password
        const user = new User({ name, password })
        const isValidData = user.validate()
        if (isValidData) {
            const userDTO = user.toDTO()
            const created = userService.execute(userDTO)
            console.log(created)
            return res.status(status.OK).json(created)
        } else {
            throw new BadRequestError()
        }
    }
}