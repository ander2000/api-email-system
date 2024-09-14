import CONFIG from "../../config/config.js";
import jsonwebtoken from 'jsonwebtoken';
const { sign, verify } = jsonwebtoken;


export async function jwtSing(payload) {
    let result = await sign(
        payload,
        CONFIG.TOKEN_KEY
    );
    return result;
}

export async function jwtVerify(token) {
    return await verify(token, CONFIG.TOKEN_KEY);
}