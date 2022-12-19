import { check } from "express-validator/check/index.js";
import validOrAbort from "../middleware/validate.js";

import CheckAuth from "../middleware/check-auth.js";

import verifyUserByEmail from "../middleware/auth/verify-user-by-email.js";
import verifyIfEmailIsAlreadySaved from "../middleware/auth/verify-if-email-is-already-saved.js";
import verifyIfAreSamePassword from "../middleware/auth/verify-if-are-same-password.js";
export default function (app, db, response) {
  const CheckAuthMD = CheckAuth(app, db, response);
  const verifyUserByEmailMD = verifyUserByEmail(app, db, response);
  const verifyIfEmailIsAlreadySavedMD = verifyIfEmailIsAlreadySaved(
    app,
    db,
    response
  );
  const verifyIfAreSamePasswordMD = verifyIfAreSamePassword(app, db, response);
  return {
    login: [
      check("data.email").isEmail().withMessage("Email incorrecto"),
      check("data.password")
        .isLength({ min: 3 })
        .withMessage("Contraseña incorrecta"),
      validOrAbort,
      verifyUserByEmailMD,
    ],
    logout: [CheckAuthMD],
    register: [
      check("data.name").isLength({ min: 3 }).withMessage("Nombre incorrecto"),
      check("data.email").isEmail().withMessage("Email incorrecto"),
      check("data.password")
        .isLength({ min: 3 })
        .withMessage("Contraseña incorrecta"),
      check("data.confirmPassword")
        .isLength({ min: 3 })
        .withMessage("Confirmación de Contraseña incorrecta"),
      validOrAbort,
      verifyIfAreSamePasswordMD,
      verifyIfEmailIsAlreadySavedMD,
    ],
  };
}
