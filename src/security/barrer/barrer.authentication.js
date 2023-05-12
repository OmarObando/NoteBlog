import jwt from "jsonwebtoken";
import { TOKEN_KEY } from "../../configuration/configDB.js";

export const createToken = (req) => {
  const { phone, password } = req.body;
  return jwt.sign({ phone, password }, "a", { expiresIn: "2h" });
};

export const verifyToken = (req, res, next) => {
  jwt.verify(req.token, "a", (err) => {
    if (err) {
      res.sendStatus(403);
    } else {
      next();
    }
  });
};

export const validateToken = (req, res, next) => {
  const bearer = req.headers["authorization"];

  if (typeof bearer !== "undefined") {
    const token = bearer.split(" ")[1];
    req.token = token;
    next();
  }
};