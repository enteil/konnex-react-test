import config from "../config/config.js";
import axios from "axios";
import moment from "moment";
export default function (app, db, response) {
  const { User, Record } = db;
  return {
    searchRestaurants: async function (req, res) {
      const {
        body: {
          data: { city },
        },
        user,
      } = req;
      try {
        await Record.create({ text: city, userId: user.id });
        const { data } = await axios.get(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=colombia+${city}&type=restaurant&key=${config.googleMapsKey}`
        );
        const result = [];
        data.results.forEach((i) => {
          result.push([i.name, i.formatted_address, i.rating]);
        });
        return response(
          req,
          res
        )({
          data: result,
          headers: ["Nombre del Restaurante", "Dirección", "Puntuación"],
        });
      } catch (err) {
        console.log(err);
      }
    },
    searchHistory: async function (req, res) {
      try {
        const { user } = req;
        const queryBuilder = {
          where: {
            userId: user.id,
          },
        };
        const result = [];
        const records = await Record.findAll(queryBuilder);
        records.forEach((item) => {
          result.push([
            item.text,
            moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          ]);
        });
        return response(
          req,
          res
        )({
          data: result,
          headers: ["Buscaste", "Fecha"],
        });
      } catch (err) {
        console.log(err);
      }
    },
  };
}
