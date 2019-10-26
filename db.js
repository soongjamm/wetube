import mongoose from "mongoose"

mongoose.connect(
    "mongodb://localhost:27017/we-tube", 
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;
const handleOpen = () => console.log("🍌Connected to DB");
const handleError = () => console.log("❌ERROR on DB server")
db.once("open", handleOpen);
db.on("error", handleError);
