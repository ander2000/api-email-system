import CONFIG from "../../config/config.js";
import { MailService } from "@sendgrid/mail";

export async function sendGrid(from, to, subject, message) {

    const sgMail = new MailService();
    sgMail.setApiKey(CONFIG.APP_KEY_EMAIL_SENDGRID);

    const msg = {
        to: to, // Change to your recipient
        from: from, // Change to your verified sender
        subject: subject,
        text: message,
        //html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    const data = sgMail
        .send(msg)
        .then((resp) => {
            return resp;
        })
        .catch((error) => {
            return error;
        })

    return data;
}