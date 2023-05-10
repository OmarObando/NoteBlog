import {database} from "../schema/connection.js";

export const getNoteBooks = (values) =>
    Promise.resolve(
        database.query(
            "SELECT * FROM libreta where libreta.idUsuario = ?",
            [
                values.idUsuario
            ]
        )   
    );

export const logNoteBook = (values) =>
    Promise.resolve(
        database.query(
            "INSERT INTO libreta (nombre,colorHexadecimal,idUsuario) VALUES (?,?,?)",
            [
                values.noteBookName,
                values.hexColor,
                values.idUser
            ]
        )
    );

export const updateNoteBook = (values) =>
    Promise.resolve(
        database.query(
            "UPDATE libreta SET nombre = IFNULL(?,nombre), colorHexadecimal = IFNULL(?,colorHexadecimal) WHERE libreta.idlibreta = ?",
            [
                values.noteBookName,
                values.hexColor,
                values.idNoteBook
            ]
        )
    );

export const getNoteBookByName = (values) =>
    Promise.resolve(
        database.query(
            "SELECT * FROM libreta WHERE idLibreta = ?",
            [
                values.idNoteBook
            ]
        )
    );