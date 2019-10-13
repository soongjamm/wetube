import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req,res) => res.send("VIDEOS"));
videoRouter.get(routes.deleteVideo, (req,res) => res.send("DELETE VIDEO"));
videoRouter.get(routes.editVideo, (req,res) => res.send("EDIT VIDEO"));
videoRouter.get(routes.videoDetail, (req,res) => res.send("VIDEO DETAIL"));
videoRouter.get(routes.upload, (req,res) => res.send("UPLOAD"));


export default videoRouter;