export const home = (req, res) => res.render("home");
export const search = (req, res) => res.send("SEARCH");
export const videos = (req, res) => res.send("VIDEOS");
export const deleteVideo = (req, res) => res.send("DELETE_VIDEO");
export const editVideo = (req, res) => res.send("EDIT_VIDEO");
export const videoDetail = (req, res) => res.send("VIDEO_DETAIL");
export const upload = (req, res) => res.send("UPLOAD");