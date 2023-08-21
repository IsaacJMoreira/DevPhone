import { Request, Response } from "express";
import { Categorie } from "../../models";

const controller = {

    async create(req:Request, res:Response){
        const { code, name, fatherCategory } = req.body;

        const newCategorie = await Categorie.create({
            code,
            name,
            fatherCategory,
        })

        return res.status(201).json(newCategorie);
    },

    async findAll(req:Request, res:Response){

        const findCategorie = await Categorie.find();

        return res.json(findCategorie);
    },

    async findOne(req:Request, res:Response){
        const { code } = req.params

        const findCategorie = await Categorie.findById(code);

        return res.status(200).json(findCategorie);
    },



};

export default Categorie;