import cors from 'cors'
import express from 'express'
import {randomBytes} from 'crypto'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
    res.send(posts);
});

app.post("/posts", async (req, res) => {
    const id = randomBytes(4).toString("hex");
    const {title} = req.body;

    posts[id] = {id, title};

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log("Listening on 4000");
});
