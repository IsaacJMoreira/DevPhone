import * as jwt from "jsonwebtoken";
import secret from "../../config/secret"


const tokenProvider = jwt;

const expireTime = "24h";

export {tokenProvider, secret, expireTime};


