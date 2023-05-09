import app from "./app.js";
import { PORT } from "./configuration/configDB.js";

console.log("Server listen in port " + PORT);
app.listen(PORT);
