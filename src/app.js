import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import indexRoutes from "./routes/index.routes.js";
import send_email from "./routes/send_email.routes.js"
import send_sms from "./routes/send_sms.routes.js"

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
// app.use(limiter)

// Routes
app.use("/", indexRoutes);
app.use("/email", send_email);
app.use("/sms", send_sms);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
