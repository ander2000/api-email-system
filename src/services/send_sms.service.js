import { twilioSMS } from '../lib/twilioSMS.js'

class SmsSystem {

    constructor() { }

    async sendSms(req, res) {
        const { body, from, to } = req.body;

        if (!body || !from || !to) {
            return res.status(400).json({ message: "invalid data" });
        }

        try {

            const result = twilioSMS(body, from, to);
            res.status(200).json({ result });
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Error Server" });
        }
    }

}

export default SmsSystem;