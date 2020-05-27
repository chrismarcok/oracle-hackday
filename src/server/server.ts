import * as express from "express";
import apiRouter from "./routes";
import keys from "./config/keys";
import * as path from "path";
import * as dotenv from "dotenv";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

type Application = express.Application;
type Request = express.Request;
type Response = express.Response;

const app:any = express();

mongoose.promise = global.Promise;
mongoose
  .connect(keys.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err:any) => console.log(`Mongo error: ${err}`));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "../public")));
app.use(apiRouter);

app.get("/root", (req: Request, res: Response) => {
  res.send("Express example route");
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/../public/index.html"));
});

const port: string | number = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server listening on port ${port} in mode ${app.settings.env}`)
);
//console.log(`${process.env.TEST}`);
//console.log(keys)