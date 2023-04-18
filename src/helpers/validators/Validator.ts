import { BadRequestError } from './../errors/PersonalError';
import { UserDTO } from './../../DTOs/UserDTO';
import { Ivalidator } from './IValidator'


export default class Validator implements Ivalidator{

    private _isValid:boolean[]=[]

    constructor(private _validator: Ivalidator){}

    userValidate(user:UserDTO):boolean{
        this._isValid.push(this.isAge(String(user.password)))
        this._isValid.push(this.isAscii(user.name))
        this._isValid.push(this.isAlpha(user.name))          
        if(this._isValid.includes(false)) return false
        return true
    }

    isAge(age:string):boolean{
        if(!this._validator.isAge(age)) throw new BadRequestError("A idade é inválida")
        return this._validator.isAge(age)
    }

    isAscii(stringAscii: string): boolean {
        if(!this._validator.isAscii(stringAscii)) throw new BadRequestError("O nome deve conter apenas letras")
        return this._validator.isAscii(stringAscii)   
    }

    isAlpha(stringAlpha:string):boolean{
        if(!this._validator.isAlpha(stringAlpha)) throw new BadRequestError("O nome deve conter apenas letras")
        return this._validator.isAlpha(stringAlpha)
    }

    isBoolean(stringBoolean:string){      
        if(!this._validator.isBoolean(stringBoolean)) throw new BadRequestError("Alguma das propriedades deve ser um valor booleano")
        return this._validator.isBoolean(stringBoolean)
    }   

}