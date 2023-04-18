import { Ivalidator } from './IValidator';
import validator from 'validator'

export class ValidatorLibAdapter implements Ivalidator{

    isAlpha(stringAlpha:string):boolean{
        return validator.isAlpha(stringAlpha, "pt-BR",{ignore: '-s.'})
    }

    isAscii(stringAscii: string): boolean {
        return validator.isAscii(stringAscii)   
    }
    isAge(numberInt:string):boolean{
        return validator.isInt(numberInt, { min: 18, max: 120 })
    }
    isBoolean(stringBoolean:string):boolean{
        return validator.isBoolean(stringBoolean,{loose:true})
    }
}