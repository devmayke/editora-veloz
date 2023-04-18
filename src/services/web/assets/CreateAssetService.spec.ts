import { ValidatorLibAdapter } from './../../../helpers/validators/ValidatorLibAdapter';
import { IAssetRepository } from './../../../repositories/web/IAssetRepository';
import { AssetDTO } from './../../../DTOs/AssetDTO';
import { CreateAssetService } from './CreateAssetService';
import { UpdateAssetDTO } from '../../../DTOs/UpdateAssetDTO';




export class FakeDB implements IAssetRepository {

    async createAsset(data: AssetDTO): Promise<AssetDTO> {
        return data
    }

    listAsset(): Promise<AssetDTO[]> {
        throw new Error('Method not implemented.');
    }

    updateAsset(data: UpdateAssetDTO): Promise<AssetDTO> {
        throw new Error('Method not implemented.');
    }

    deleteAsset(id: number): Promise<AssetDTO> {
        throw new Error('Method not implemented.');
    }
}


const assetMock: AssetDTO = {
    name: "asset",
    description: "testando criação de asset",
    qr_code: "123456789",
    android: "true",
    ios: "true"
}


describe('CreateAssetService', () => {
    it("Deve Retornar um objeto Asset criado", async () => {


        const asset = new CreateAssetService(new FakeDB())
        const result = await asset.execute(assetMock)

        expect(result).toEqual(assetMock)

    })


    it("Deve retornar um erro ao criar o asset por não ser um valor booleano", async () => {
        assetMock.ios = "true"
        assetMock.android = "falhe"

        const asset = new CreateAssetService(new FakeDB())

        asset.setValidator(new ValidatorLibAdapter())
        try {
            console.log(asset)
            let result = asset.validate(assetMock)
            expect(result).toBe(false)
        } catch (e: any) {
            expect(e.message).toBe("Alguma das propriedades deve ser um valor booleano")
        }
    })


    it('Should have been called the method execute correctly ', async () => {

        const sut = new CreateAssetService(new FakeDB())

        const sutSpyExecute = jest.spyOn(sut, "execute")/// ouvindo propriedade 'execute' dentro do objeto sut

        const result = await sut.execute(assetMock)

        expect(sutSpyExecute).toHaveBeenCalled()/// foiiii chamado
        expect(sutSpyExecute).toHaveBeenCalledWith(assetMock)////foi chamdo com esse argumento
        expect(result).toEqual(assetMock)/// retornou isto        
    })
})


