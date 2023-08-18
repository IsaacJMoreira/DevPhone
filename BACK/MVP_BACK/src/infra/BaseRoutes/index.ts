import { Router } from 'express';
import { User } from '../../models'

const routes= Router();

routes.get('/', async(req, res) =>{
    try {
        await User.create({
            id: 1,
            name: "Isaac",
            email: 'isaac@email.com',
            password: "42069"
        });
        return res.json("OK!!!");
        
    } catch (error) {
        console.log("falhou!", error);   
    };
});

routes.get('/teste', async (req, res) =>{
    console.log("Deu bom!");
    return res.json("UMENO ISSO PRESTA!");
})

export default routes;