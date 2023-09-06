import { number } from "joi";
import { controller } from "./index";

describe('User crud repository', ()=>{
    test('create user and save in DB', async ()=> {

        const payloadCreate = {
        name:'Teste',
        email:'Teste@email',
        credential:'adm',
        password:'12345',
        };

        const payloadUpdate = {
        name:'Teste',
        email:'Teste@email',
        credential:'adm',
        password:'12345',
        };

        const result = await controller.create(payloadCreate,payloadUpdate) 
    
        expect(result).toBeTruthy()
        expect(typeof result.id === 'number').toBeTruthy()
    })
    expect(test)
})