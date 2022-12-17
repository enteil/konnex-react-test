import Controller from "../controllers/auth.js";
import Validator from "../validators/auth.js";
export default function (app, db, response) {
  const router = app.Router();
  const controller = Controller(app, db, response);
  const validate = Validator(app, db, response);

  router.post("/login", validate.login, controller.login);
  router.post("/logout", validate.logout, controller.logout);
  router.post("/register", validate.register, controller.register);

  return router;
}
