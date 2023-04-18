import { UserDTO } from './../DTOs/UserDTO';
import { BadRequestError } from '../helpers/errors/PersonalError';
import Validator from '../helpers/validators/Validator';
import { ValidatorLibAdapter } from '../helpers/validators/ValidatorLibAdapter';

export default class User{
   private _validator:Validator | undefined
   public name:string =""
   public password:string = ""

   constructor(user:UserDTO){
      Object.assign(this, user)   
   }

   toDTO():UserDTO{
      const {name, password} = this
      return {name, password}
   }
 
//    validate():UserDTO {
//       this._validator = new Validator(new ValidatorLibAdapter())
//       const isValidData = this._validator.validate({name:this.name, password:this.password}) 
//       if(!isValidData) throw new BadRequestError("Dados inválidos!")
//       const user = {name:this.name, password:this.password}
//       return user    
//   }
}