const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "/public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

const port = 2001;

app.listen(port, function () {
    console.log("Listening on port 2001!");
});