import { status } from "./httpStatus"

export class PersonalError extends Error{
    statusCode:number

    constructor(msgError:string, statusCode = status.INTERBNAL_SERVER_ERROR){
        super(msgError)
        this.statusCode = statusCode
    }
}


export class BadRequestError extends PersonalError{
    constructor(msg="Bad Request"){ 
        super(msg)
        this.statusCode = status.BAD_REQUEST
    }
}

export class InternalServerError extends PersonalError{
    constructor(msg="Internal Server Error"){ 
        super(msg)
        this.statusCode = status.INTERBNAL_SERVER_ERROR
    }
}

export class UnauthorizedError extends PersonalError{
    constructor(msg="Unauthorized"){ 
        super(msg)
        this.statusCode = status.UNAUTHORIZED
    }
}

export class NotFoundError extends PersonalError{
    constructor(msg="Not Found"){ 
        super(msg)
        this.statusCode = status.NOT_FOUND
    }
}



