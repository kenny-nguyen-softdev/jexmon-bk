import { Application, urlencoded, json } from "express";
// import morgan from "morgan";
// import fs from "fs";
// import { WriteStream } from "fs";
// import path from "path";
// import helmet from "helmet";
// import winston from "winston";
import cors from "cors";

// import rateLimiter from "./app/middlewares/rateLimit";
// import { unCoughtErrorHandler } from "./handlers/errorHandler";
import Routes from "./routes";
import UserRouter from "./routes/UserRouter";
import CategoryRouter from "./routes/CategoryRouter";
import BrandRouter from "./routes/BrandRouter";

// app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)

export default class Server {
  constructor(app: Application) {
    this.config(app);
    // new Routes(app);
  }

  public config(app: Application): void {
    // const accessLogStream: WriteStream = fs.createWriteStream(
    //   path.join(__dirname, "./logs/access.log"),
    //   { flags: "a" }
    // );
    app.use("/api/user", UserRouter);
    app.use("/api/category", CategoryRouter);
    app.use("/api/brand", BrandRouter);
    app.use(cors);
    // app.use(morgan("combined", { stream: accessLogStream }));
    // app.use(urlencoded({ extended: true }));
    // app.use(json());

    // app.use(helmet());
    // app.use(rateLimiter()); //  apply to all requests
    // app.use(unCoughtErrorHandler);
  }
}
// process.on("beforeExit", function (err) {
//   // winston.error(JSON.stringify(err));
//   console.error(err);
// });
