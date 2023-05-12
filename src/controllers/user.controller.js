import {database} from "../schema/connection.js";

const user = "User"

export const registerUser = (req,otp,registerTime) =>{
    const {
        names,
        surnames,
        phone,
        password
    } = req.body;
    return Promise.resolve(
        database.query(
            "INSERT INTO `noteblog`.`usuario` (nombres, apellidos, tiempoRegistro, activo, celular, contrasenia,otp) VALUES (?, ?, ?, 0, ?, ?,?)",
            [
                names,
                surnames,
                registerTime,
                phone,
                password,
                otp
            ]
        )        
    );
};

export const validateOTP = (req) =>{ //Maybe remove
    const {
        otp
    } = req.body;
    Promise.resolve(
        database.query(
            "SELECT * FROM usuario where usuario.otp = ?",
            [
                values.otp
            ]
        )
    );
};

export const getUserByPhone = (req) =>{
    const {
        phone
    } = req.body;
    return Promise.resolve(
        database.query(
            "SELECT * FROM usuario WHERE celular = ?",
        [
            phone
        ]
        )   
    )
};


export const activateUser = (req, activatedTime) =>{
    const {
        phone,
        otp
    } = req.body;
    return Promise.resolve(
        database.query("Update usuario SET activo = 1, tiempoActivacion = ? WHERE usuario.celular = ? and usuario.otp = ?",
        [
            activatedTime,
            phone,
            otp
        ]
        )            
    );

}


export const login = (req) =>{
    const {
        phone,
        password
    } = req.body;
    return Promise.resolve(
        database.query(
            "SELECT * FROM usuario WHERE usuario.celular = ? and usuario.contrasenia = ? and usuario.activo = 1",
        [
            phone,
            password
        ]
        )   
    );
};


export const updateUser = (req) => {
    const {
        idUser,
        names,
        surnames,
        password
    } = req.body;
    return Promise.resolve(
        database.query(
            "UPDATE usuario SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), contrasenia = IFNULL(?,contrasenia) WHERE idUsuario = ?",
            [                
                names,
                surnames,
                password,
                idUser,
            ]
        )
    );
};





        
    

