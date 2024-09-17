import CONFIG from "../../config/config.js";
import twilio from 'twilio';

export async function twilioSMS(body, from, to) {

    const client = new twilio(CONFIG.ACCOUNT_SID_SMS, CONFIG.AUTH_TOKEN_SMS);

    const msg = {
        body: body,
        from: from,
        to: to
    }

    const data = client.messages
        .create(msg)
        .then((message) => { 
            return (message) 
        })
        .catch((err) => { 
            return (err) 
        })

    return data;
}