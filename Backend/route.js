const express = require("express");
const app = express();

const path = require("path");


const addUser = require("./container/add.js");
const checkUser = require("./container/login.js");
const user = require("./container/user.js");

app.set("views", path.join(__dirname, "../Frontend"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../Frontend")));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.redirect("/user");                                                        
})

app.get("/user", (req, res) => {
    res.render("Home/index.ejs");
})

app.get("/user/login", (req, res) => {
    let wrong = false;
    res.render("LoginPage/index.ejs", {wrong});
})

app.get("/user/signUp", (req, res) => {
    let wrong = false;
    res.render("SignUpPage/index.ejs", {wrong});
})

app.get("/user/game", checkUser);
app.post("/user/game", addUser);
app.get("/user/:id", user);

module.exports = app;
