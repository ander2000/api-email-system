import { Resend } from 'resend';
import CONFIG from "../../config/config.js";


export async function resend(from, to, subject) {

    const resend = new Resend(CONFIG.APP_KEY_EMAIL);

    const data = await resend.emails.send({
        from: from,
        to: to,
        subject: subject,
        html: "HOLA CORREO",
    });

    return data;
}
