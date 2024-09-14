import { config } from "dotenv";
config();

const CONFIG = {
    PORT: process.env.PORT || 3000,
    PASSWORD: process.env.PASSWORD || "",
    TOKEN_KEY:  process.env.TOKEN_KEY,
};

export default CONFIG;