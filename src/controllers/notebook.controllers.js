import {database} from "../schema/connection.js";

export const getNoteBooks = (req) =>{
    const {
        idUser
    } = req.body;
    return Promise.resolve(
        database.query(
            "SELECT * FROM libreta where libreta.idUsuario = ?",
            [
                idUser
            ]
        )   
    );
};


export const logNoteBook = (req) =>{
    const {
        notebookName,
        hexColor,
        idUser
    } = req.body;
    return Promise.resolve(
        database.query(
            "INSERT INTO libreta (nombre,colorHexadecimal,idUsuario) VALUES (?,?,?)",
            [
                notebookName,
                hexColor,
                idUser
            ]
        )
    );
};

export const updateNoteBook = (req) =>{
    const{
        noteBookName,
        hexColor,
        idNoteBook
    } = req.body;
    return Promise.resolve(
        database.query(
            "UPDATE libreta SET nombre = IFNULL(?,nombre), colorHexadecimal = IFNULL(?,colorHexadecimal) WHERE libreta.idlibreta = ?",
            [
                noteBookName,
                hexColor,
                idNoteBook
            ]
        )
    );
};

export const getNoteBookByName = (req) =>{
    const {notebookName,idUser} = req.body;
    return Promise.resolve(
        database.query(
            "SELECT * FROM libreta WHERE nombre = ? and idUsuario=?",
            [
                notebookName,
                idUser
            ]
        )
    );
};
export const deleteNoteBook = (req) =>{
    const {idNotebook} = req.body;
    return Promise.resolve(
        database.query(
            "DELETE FROM libreta WHERE idLibreta = ?",
            [
                idNotebook
            ]
        )
    );
};
