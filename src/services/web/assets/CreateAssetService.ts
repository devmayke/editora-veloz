import { Ivalidator } from './../../../helpers/validators/IValidator';
import { ValidatorLibAdapter } from './../../../helpers/validators/ValidatorLibAdapter';
import { AssetDTO } from './../../../DTOs/AssetDTO';
import { IAssetRepository } from '../../../repositories/web/IAssetRepository';
import Validator from '../../../helpers/validators/Validator';

export class CreateAssetService{
    private _validator:Ivalidator | null

    constructor(private _iAssetRepository:IAssetRepository, l_validator?:Ivalidator){
        this._validator = l_validator ?? new ValidatorLibAdapter()
    }
    
    async execute(data:AssetDTO):Promise<AssetDTO>{ 
        const createdAsset = await this._iAssetRepository.createAsset(data) 
        return createdAsset
    }

    setValidator(l_validator:Ivalidator){
        this._validator = l_validator
    }

    validate(data:AssetDTO){
        const validator = this._validator? new Validator(this._validator):null
        return (validator?.isBoolean(data.ios) && validator?.isBoolean(data.android))
    }
}