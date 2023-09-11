import {userRepository} from '.'
import { db } from '../../../database/Db_test'
import Scenario from '../../../infra/tests/Scenario' 

describe('User repository', ()=> {
    beforeEach(async()=>{
        const scenario = new Scenario(db.instance)
        await scenario.init()
    })
    
    
    test('should create Use in Db',async () => {
        
    const payload = {
        nome: 'teste',
        email: 'teste@email',
        password: '10928310923' 
    }

    const result = await userRepository.create(payload);
    expect(result).toBeTruthy()
    expect(typeof result.id === 'number').toBeTruthy()
    expect(result.nome).toEqual(payload.nome)
    expect(result.email).toEqual(payload.email)
    })
})