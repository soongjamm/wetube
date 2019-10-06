import express from "express"; //const ~~ = require("~~") 였나
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter }  from "./router";

const app = express();

const handleHome = (req,res) => res.send("HI FROM ASS");

const handleProfile = (req,res) =>  res.send("Your are on my profile.");
//function handle~(req,res){...}

const betweenHome = (req, res, next)  => {
    console.log("between");
    next();
};

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;