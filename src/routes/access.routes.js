import Router from "express-promise-router";
import{
    registerUser,
    validateOTP,
    getUserByPhone,
    updateUser,
    activateUser,
    login
} from "../controllers/user.controller.js";
import{
    generateRandomString
} from "../RandomGenerator/otp.generator.js";
import {TWILIO_PHONE_NUMBER} from "../messages/twilio.config.js"
import {sendSMS, sendWS} from "../messages/twilio.js";
import {verifyBasic} from "../security/basic/basic.authentication.js"
import {createToken, validateToken, verifyToken} from "../security/barrer/barrer.authentication.js"

const router = Router();

router.post("/access/singup", function(req,res){
    verifyBasic(req,res,()=>{
        var otpKey = generateRandomString(6);
        const now = new Date();
        const year = now.getFullYear();
        const month = ('0' + (now.getMonth() + 1)).slice(-2);
        const day = ('0' + now.getDate()).slice(-2);
        const todayDate = `${year}-${month}-${day}`;
        getUserByPhone(req)
            .then(([row]) => {
                row.length > 0
                    ? res.status(404).json({message:'El numero de telefono que se trata de registrar ya se encuentra en el sistema'})
                    : registerUser(req,otpKey,todayDate)
                        .then(() =>{
                            //sendSMS(TWILIO_PHONE_NUMBER,values.phone,"Tu otp password es " + otpKey);
                            //sendWS(req.params.phone,"Tu otp password es "+otpKey)
                            res.status(200).json({otp : otpKey});
                            }
                        )
                        .catch((err) => res.status(500).send(err));
                    }
            )
            .catch((err) => res.status(500).send(err));
    });
});

router.post("/access/activate",function(req,res){
    verifyBasic(req,res,()=>{
        const now = new Date();
        const year = now.getFullYear();
        const month = ('0' + (now.getMonth() + 1)).slice(-2);
        const day = ('0' + now.getDate()).slice(-2);
        const todayDate = `${year}-${month}-${day}`;
        activateUser(req,todayDate)
            .then(([row]) => {
                row.affectedRows > 0
                ? res.sendStatus(204)
                : res.status(404).json({ message:'El código OTP no es correcto o el número de telefono no es correcto'})
            })
            .catch((err) => res.status(500).send(err));
    });  
});

router.post("/access/login",function(req,res){
    verifyBasic(req,res,()=>{
        login(req)
        .then(([row])=>{
            const token = createToken(req);
            row.length>0
                ? res.status(200).json({token, row})
                : res.status(404).json({"message":"Las credenciales ingresadas no son validas"})
        })
        .catch((err) =>res.status(500).send(err))
    });
});

export default router;