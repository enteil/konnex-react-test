process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import config from "./config/config.js";
import Routes from "./routes/index.js";
import Models from "./models/index.js";
import response from "./helpers/response.js";
import express from "express";
import bodyParser from "body-parser";

const clog = (st, text) => console.log(st, text);
clog(
  "\x1b[33m",
  `
  ██   ██  ██████  ███    ██ ███    ██ ███████ ██   ██ 
  ██  ██  ██    ██ ████   ██ ████   ██ ██       ██ ██  
  █████   ██    ██ ██ ██  ██ ██ ██  ██ █████     ███   
  ██  ██  ██    ██ ██  ██ ██ ██  ██ ██ ██       ██ ██  
  ██   ██  ██████  ██   ████ ██   ████ ███████ ██   ██
  `
);

const db = new Models(express, response);
const routes = new Routes(express, db, response);
const app = express();
const IS_RUN = function () {
  clog("\x1b[36m%s\x1b[0m", `ENV: ${config.ENV}`);
  clog("\x1b[36m%s\x1b[0m", `Lintening in ${config.domain}:${config.port}`);
};

const RUN_SERVER = () => {
  const router = express.Router();

  clog("\x1b[37m", "Putting headers");

  app.disable("x-powered-by");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, refacil-version"
    );
    next();
  });

  clog("\x1b[37m", "Creating node");
  clog("\x1b[37m", "Creating Controllers");
  router.use("/auth", routes.Auth);
  router.use("/search", routes.Search);
  app.use("/api/v1", router);

  app.use((err, req, res, next) => {
    console.error("GENERAL ERR", err);
    res.status(500).json({ message: "Algo Salió mal" });
  });
};

RUN_SERVER();
const SERVER = app.listen(config.port, IS_RUN);
SERVER.timeout = 2 * 60 * 1000;
