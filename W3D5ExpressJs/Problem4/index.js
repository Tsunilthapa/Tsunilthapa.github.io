const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, '/css')));


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

    let name = req.body.name;
    let age = req.body.age;

    res.redirect('/output?name=' + name + '&age=' + age);

});

app.get('/output', function (req, res) {

    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }

    if (!age) {
        age = "Age"
    }

    res.send(`Welcome ${name} of age ${age}`);

    // res.send("Output test")

});

app.listen(3000,);
