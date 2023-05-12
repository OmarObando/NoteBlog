import app from "./app.js";
import { PORT } from "./configuration/configDB.js";
import fs from "fs";
import https from "https";


console.log("Server listen in port " + PORT);
app.listen(PORT);
