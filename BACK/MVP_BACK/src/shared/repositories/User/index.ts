import { User } from "../../../models";
import UserRepository from "./userRepository";

export const userRepository = new UserRepository(User)