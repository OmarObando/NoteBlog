import { Router } from "express";
import { ping } from "../controllers/test.controllers.js";
import {sendSMS, sendWS} from "../messages/twilio.js";
import{
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER
} from "..//messages//twilio.config.js";

const router = Router();

router.get("/ping", function (req, res) {
  ping
    .then((row) => res.status(200).send(row[0]))
    .catch((err) => res.status(500).send(err));
});


router.post("/sms", function(req, res){
    sendWS();
    //sendSMS("+522281300932","this is the test").then().catch();
});

export default router;