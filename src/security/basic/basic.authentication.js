import basicAuth from "basic-auth";
import {credentials} from "../basic/credentials.js"
export const verifyBasic = (req, res, next) => {
    const auth = basicAuth(req);
    if(!auth){
        res.set('WWW-Authenticate','Basic realm ="Area Segura"');
        res.status(401).send('Requiere auntentificación básica');
    }else{
        if(!checkAuth(auth.name,auth.pass)){
            res.set('WWW-Authenticate','Basic realm ="Area Segura"');
            res.status(401).send('Nombre de usuario o constrasenia incorrectos');
        }else{
            next();
        }
    }
};

function checkAuth(name, pass){
    var flag = true;
    (credentials.user == name && credentials.password == pass) 
        ? flag = true 
        :flag = false;
    return flag
}