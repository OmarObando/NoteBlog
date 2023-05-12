import Router from "express-promise-router";
import{
    updateUser
} from "../controllers/user.controller.js";
import {validateToken, verifyToken} from "../security/barrer/barrer.authentication.js";

const router = Router();


router.put("/user/update",validateToken,(req, res) => {
    verifyToken(req, res, () =>{
        updateUser(req)
        .then(([row]) => {
            row.affectedRows>0
                ? res.sendStatus(204)
                : res.status(404).json({"message":"No se encontró ningún estudiante con ese identificador"})
        })
        .catch((err)=> res.status(500).send(err));
    });
});

export default router;