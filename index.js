import 'dotenv/config'
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import data from "./data.js"

const app = express();
app.use(cors())

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
}

const url = process.env.MONGODB_URL;
mongoose.connect(url);

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
    author: {
        type: String,
        required: true
      },
    description: {
        type: String,
        required: true
      },
    url: {
        type: String,
        required: true
      },
    timestamp: {
        type: String,
        required: true
      },
    link: {
        type: String,
        required: true,
        unique: true
      },
    publisher: {
        type: String,
        required: true
      }
})

const News = mongoose.model("News", newsSchema);


app.get("/news", async function (req, res) {
    try {
        const foundNews = await News.find();
        res.json(foundNews);
    } catch (error) {
        res.send(error);
    }
})

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})

async function defaultData() {
    try {
        await News.insertMany(data);
    } catch (error) {
        console.log("Error while inserting Default Data. ", error);
    }
}
// defaultData();