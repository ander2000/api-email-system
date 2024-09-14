import app from "./app.js";
import CONFIG from "./../config/config.js";

app.listen(CONFIG.PORT);
console.log(`Server on port http://localhost:${CONFIG.PORT}`);
