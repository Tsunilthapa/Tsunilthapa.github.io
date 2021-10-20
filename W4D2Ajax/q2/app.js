const express = require("express");
const path = require("path");
const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "view", "js")));
app.use(express.json());

const possibleAnswers = ["It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
    "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/8ball", (req, res) => {
    const ansIndex = Math.floor(Math.random() * possibleAnswers.length);
    res.send(possibleAnswers[ansIndex]);
});


app.post("/8ball", (req, res) => {
    const ansIndex = Math.floor(Math.random() * possibleAnswers.length);
    res.send(answer[ansIndex]);
});


app.listen(3000);
