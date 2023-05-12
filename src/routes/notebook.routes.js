import Router from "express-promise-router";
import {
    getNoteBookByName,
    getNoteBooks,
    logNoteBook,
    updateNoteBook
} from "../controllers/notebook.controllers.js";
import {validateToken, verifyToken} from "../security/barrer/barrer.authentication.js";
import {getNotesOfNotebook} from "../controllers/note.controllers.js"
const router = Router();

router.get("/notebook/query",validateToken,(req,res) => {
    verifyToken(req,res,() =>{
        getNoteBooks(req)
        .then(([row]) => {
            row.length>0
            ? res.status(200).json({row})
            : res.status(404).json({message:"No se encontrarón libretas"})
        })
        .catch((err) => res.status(500).send(err));
    });
});

router.post("/notebook/log",validateToken,(req,res) =>{
    verifyToken(req,res,() =>{
        getNoteBookByName(req)
        .then(([row]) =>{
            row.length>0
            ? res.status(404).json({message:"Ya se encuentra una libreta con el nombre que trata de ingresar"})
            : logNoteBook(req)
                .then(()=> res.sendStatus(204))
                .catch((err) => res.status(500).json({err}));
        })
        .catch((err)=> res.status(500).send({err}));
    });
});

router.put("/notebook/update",validateToken,(req,res)=>{
    verifyToken(req,res,() => {
        getNoteBookByName(req)
        .then(([row]) =>{
            row.length>0
            ? res.status(404).json({message:"Ya se encuentra una libreta con el nombre que trata de ingresar"})
            : updateNoteBook(req)
                .then(()=> res.sendStatus(204))
                .catch((err) => res.status(500).json({err}));
        })
        .catch((err)=> res.status(500).send({err}));
    });
});

router.delete("/notebook/delete",validateToken,(req,res)=>{
    verifyToken(req,res,() => {
        getNotesOfNotebook(req)
        .then(([row]) =>{
            row.length>0
            ? res.status(404).json({message:"La libreta aun cuenta con notas asociadas"})
            : NoteBook(req)
                .then(()=> res.sendStatus(204))
                .catch((err) => res.status(500).json({err}));
        })
        .catch((err)=> res.status(500).send({err}));
    });
});

export default router;