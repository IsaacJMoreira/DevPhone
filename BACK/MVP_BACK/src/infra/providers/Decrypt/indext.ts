import { expressjwt } from "express-jwt"
import secret from '../../config/secret'

const algo = 'HS256';

const decryptProvider = expressjwt({
    secret: secret.key,
    algorithms: [algo],
    //credentialsRequired: false //maybe this is the enswer?
});

export default decryptProvider;