const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("<form method='post' action='/result'>" +
        "<label>Name<input type='text' name='name'/></label>" +
        "<label>Age<input type='number' name='age'/></label>" +
        "<input type='submit' value='Submit Query'/>" +
        "</form>");
});

app.post('/result', (req, res) => {
    debugger;
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }

    if (!age) {
        age = "Age"
    }

    res.send(`Welcome ${name} of age ${age}`);
});

app.listen(3000);

