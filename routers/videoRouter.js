import express from "express";
import routes from "../routes";
import { getUpload, postUpload, deleteVideo, editVideo, videoDetail, upload } from "../controllers/videoController";

const videoRouter = express.Router();

//videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail(), videoDetail);


export default videoRouter;