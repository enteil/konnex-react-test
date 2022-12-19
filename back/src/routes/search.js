import Controller from "../controllers/search.js";
import Validator from "../validators/search.js";
export default function (app, db, response) {
  const router = app.Router();
  const controller = Controller(app, db, response);
  const validate = Validator(app, db, response);

  router.post(
    "/listPlaces",
    validate.searchRestaurants,
    controller.searchRestaurants
  );

  router.post("/listRecords", validate.searchHistory, controller.searchHistory);

  return router;
}
