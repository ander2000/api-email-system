import { config } from "dotenv";
config();

const CONFIG = {
    PORT: process.env.PORT || 3000,
    PASSWORD: process.env.PASSWORD || "",
    TOKEN_KEY: process.env.TOKEN_KEY,
    APP_KEY_EMAIL: process.env.APP_KEY_EMAIL,
    APP_KEY_EMAIL_SENDGRID: process.env.APP_KEY_EMAIL_SENDGRID,
    ACCOUNT_SID_SMS: process.env.ACCOUNT_SID_SMS,
    AUTH_TOKEN_SMS: process.env.AUTH_TOKEN_SMS,
};

export default CONFIG;