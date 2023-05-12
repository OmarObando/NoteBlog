import {database} from "../schema/connection.js";

export const getNotesOfNotebook = (req) =>{
    const {
        idNotebook
    } = req.body;
    return Promise.resolve(
        database.query(
            "SELECT * FROM nota where nota.idLibreta = ?",
            [
                idNotebook
            ]
        )   
    );
};