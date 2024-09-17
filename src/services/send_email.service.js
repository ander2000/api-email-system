//import { resend } from "../lib/resend.js";
import { sendGrid } from "../lib/sendGrid.js";

class EmailSystem {

    constructor() { }

    async sendEmail(req, res) {
        const { from, to, subject, message } = req.body;

        if (!from || !to || !subject || !message) {
            return res.status(400).json({ message: "invalid data" });
        }

        try {

            //const result = await resend(from, to, subject)
            const result = await sendGrid(from, to, subject, message);

            res.status(200).json({ result });
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message : "Error Server" });
        }
    }

}

export default EmailSystem;