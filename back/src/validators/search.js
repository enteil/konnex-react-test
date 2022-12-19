import { check } from "express-validator/check/index.js";
import validOrAbort from "../middleware/validate.js";

import CheckAuth from "../middleware/check-auth.js";

export default function (app, db, response) {
  const CheckAuthMD = CheckAuth(app, db, response);
  return {
    searchRestaurants: [
      check("data.city").isLength({ min: 3 }).withMessage("Ciudad incorrecta"),
      validOrAbort,
      CheckAuthMD,
    ],
    searchRestaurantsByCC: [CheckAuthMD],
    searchHistory: [CheckAuthMD],
  };
}
