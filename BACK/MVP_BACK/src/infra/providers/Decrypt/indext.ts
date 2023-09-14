import { expressjwt } from "express-jwt"
import secret from '../../config/secret'

const algo = 'HS256';

const decryptProvider = expressjwt({
    secret: secret.key,
    algorithms: [algo],
});

export default decryptProvider;