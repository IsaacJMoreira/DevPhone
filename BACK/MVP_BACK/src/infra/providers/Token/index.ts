import * as jwt from "jsonwebtoken";
import secret from "../../config/secret"


const tokenProvider = jwt;

export {tokenProvider, secret};


