import app from "./app.js";
import { PORT } from "./configuration/configDB.js";
import fs from "fs";
import https from "https";
import cors from "cors";


/*const options = {
    key: fs.readFileSync('');
    cert: fs.readFileSync('');
};*/

//https.createServer(options, app).listen(PORT,() => console.log("Server listen in port " + PORT));
console.log("Server listen in port " + PORT);
/*app.use(cors({
    //dominios disponibles
}));*/
app.listen(PORT);
