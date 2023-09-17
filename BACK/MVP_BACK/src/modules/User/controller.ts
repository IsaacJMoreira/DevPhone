import { Request, Response, response } from "express";
import { User } from "../../models";
import errors from "../errors";
import cryptoProvider from "../../infra/providers/CryptoProvider";

const isTest = false;

const userControllers = {
  async create(req: Request, res: Response) {
    const { name, email, password, address } = req.body;

    const newEncryptedPass = cryptoProvider.hashSync(password, 10);

    try {
      const newUser = await User.create({
        name,
        email,
        password: newEncryptedPass,
        address
      });
      if (isTest) console.log(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      if (isTest) console.log(error);
      return res.status(500).json(errors.internal_server_error);
    }
  },

  async createADM(req: Request, res: Response) {
    const { name, email, password, address } = req.body;

    const newEncryptedPass = cryptoProvider.hashSync(password, 10);

    try {
      const newUser = await User.create({
        name,
        email,
        credential: "ADM",
        password: newEncryptedPass,
        address
      });
      if (isTest) console.log(newUser);
      return res.status(201).json(newUser);
    } catch (error) {
      if (isTest) console.log(error);
      return res.status(500).json(errors.internal_server_error);
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const users = await User.find();

      if (!users.length) return res.status(404).json(errors.not_found);
      return res.status(200).json(users);
    } catch (error) {
      if (isTest) console.log(error);
      response.status(500).json(errors.internal_server_error);
    }
  },

  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findById({ _id: id });

      if (!user) return res.status(404).json(errors.not_found);
      const nonSensibleUserData = {//better safe than sorry ⛑ 
        name: user.name,
        email: user.email,
        address: user.address,
        mainPhone: user.mainPhone,
      }

      return res.status(200).json(nonSensibleUserData);
    } catch (error) {
      if (isTest) console.log(error);
      return res.status(500).json(errors.internal_server_error);
    }
  },
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password, credential, address, mainPhone } = req.body;

    const newEncryptedPass = cryptoProvider.hashSync(password, 10);

    try {
      const updateUser = await User.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            name,
            email,
            password: newEncryptedPass,
            credential,
            address,
            mainPhone,
          },
        }
      );

      return res.status(204).json(updateUser);
    } catch (error) {
      if (isTest) console.log(error);
      res.status(500).json(errors.internal_server_error);
    }
  },
};

export default userControllers;
