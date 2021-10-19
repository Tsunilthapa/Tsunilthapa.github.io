const express = require('express');

const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session");

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, '/css')));

app.use(
    session({
        secret: "salt for cookie signing",
        resave: true,
        saveUninitialized: true
    })
);

app.use((req, res, next) => {
    if (!req.session.userDetail) {
        req.session.userDetail = {};
    }
    next();
});

const date = new Date();
let decoration = "";
if (date.getHours() >= 6 && date.getHours() <= 18) {
    decoration = "<link href='css/day.css' rel='stylesheet'/>";
}
else {
    decoration = "<link href='/css/night.css' rel='stylesheet'/>";
}

app.get('/', (req, res) => {
    let html = "<!DOCTYPE html>" +
        "<html lang='en'>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<title>Node JS</title>" +
        decoration +
        "</head>" +
        "<body>" +
        "<form method='post' action='/result'>" +
        "<label>Name<input type='text' name='name'/></label>" +
        "<label>Age<input type='number' name='age'/></label>" +
        "<input type='submit' value='Submit Query'/>" +
        "</form>" +
        "</body>" +
        "</html>";
    res.send(html);
});


app.post('/result', function (req, res, next) {

    req.session.userDetail["name"] = req.body.name;
    req.session.userDetail["age"] = req.body.age;

    res.redirect('/output');

});

app.get('/output', function (req, res) {
    res.send(`Welcome ${req.session.userDetail["name"]} of age ${req.session.userDetail["age"]}`);
});

app.listen(3000,);
