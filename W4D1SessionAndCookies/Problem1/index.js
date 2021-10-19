const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index", { cookies: req.cookies });
});

app.post("/addCookie", (req, res) => {
    let key = req.body.cookieKey;
    let value = req.body.cookieValue;
    res.cookie(key, value);
    res.redirect("back");
});

app.listen(3000);