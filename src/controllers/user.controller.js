import {database} from "../schema/connection.js";

const user = "User"

export const registerStudent = (values) =>
    Promise.resolve(
        database.query(
            "INSERT INTO `noteblog`.`usuario` (nombres, apellidos, tiempoRegistro, activo, celular, contrasenia,otp) VALUES (?, ?, ?, 0, ?, ?,?)",
            [
                values.names,
                values.surnames,
                values.registerTime,
                values.phone,
                values.password,
                values.otp
            ]
        )        
    );

export const validateOTP = (values) =>
    Promise.resolve(
        database.query(
            "SELECT * FROM usuario where usuario.otp = 1",
            [
                values.otp
            ]
        )
    );

export const getUserByPhone = (values) =>
    Promise.resolve(
        database.query(
            "SELECT usuario.* FROM usuario WHERE usuario.celular = ?",
        [
            values.celular
        ]
        )   
    )

export const activateUser = (values) =>
    Promise.resolve(
        database.query("Update usuario SET activo = 1, tiempoActivacion = ? WHERE usuario.celular = ?",
        [
            values.phone,
            values.activatedTime
        ]
        )            
    );

export const login = (values) =>
    Promise.resolve(
        database.query(
            "SELECT usuario.* FROM usuario WHERE usuario.celular = ? and usuario.contrasenia = ?",
        [
            values.celular,
            values.contrasenia
        ]
        )   
    );

export const updateUser = (values) =>
    Promise.resolve(
        database.query(
            "UPDATE usuario SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), contrasenia = IFNULL(?,contrasenia)",
            [
                values.names,
                values.surnames,
                values.password
            ]
        )
    );




        
    

