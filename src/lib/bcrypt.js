import { compare, hash } from "bcrypt";

class Bcrypt{
    constructor(){}
    
    async hashPassword(password, numberEncript = 10) {
        return await hash(password, numberEncript);
    } 

    async verifyPassword(password, hashUserDatabase) {
        return await compare(password, hashUserDatabase);
    } 
}

export default Bcrypt;