import express from "express";
import routes from "../routes";
import { videos, deleteVideo, editVideo, videoDetail, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.upload, upload);


export default videoRouter;