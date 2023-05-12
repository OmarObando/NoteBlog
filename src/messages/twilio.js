import twilio from "twilio";
import{
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_PHONE_NUMBER
 } from "..//messages//twilio.config.js";

const clientSMS = twilio(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN
);

export const sendSMS =  (from, to, body)  =>
  clientSMS.messages
    .create({ from, to, body })
    .then((message) => {
      console.log(
        `SMS message sent to ${to}. Message SID: ${message.sid}`
      );
    })
    .catch((error) => {
      console.error(error);
});

export const sendWS = (toSend,content) =>
  clientSMS.messages.create(
    {
      from: "whatsapp:+14314301236",
      body:"test",
      to: "whatsapp:+522281300932"
    }).then((message) => {
      console.log(
        `SMS message sent to ${to}. Message SID: ${message.sid}`
      );
    })
    .catch((error) => {
      console.error(error);
    });


