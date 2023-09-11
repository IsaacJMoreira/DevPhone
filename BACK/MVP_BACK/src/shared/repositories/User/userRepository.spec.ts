import {userRepository} from '.'

describe('User repository', ()=> {
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