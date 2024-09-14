import CONFIG from "../../config/config.js";

export const verifyPasswUserSistem = (req, res, next) => {
  const passwUserSistem = req.body.passwUserSistem || req.headers["passw-user-sistem"];

  if (!passwUserSistem) {
    return res.status(403).send("system user password is required");
  }

  if (passwUserSistem !== CONFIG.PASSWORD) {
    return res.status(401).send("Invalid Password");
  }
  return next();
};