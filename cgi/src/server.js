"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("fs");
var app = express();
app.get("/", function (req, res) {
    try {
        res.write(String(fs.readFileSync("../src/index.html", {
            encoding: "utf8",
            flag: "r",
        })).replace(/@dynamiclink/g, "http://localhost"));
        return res.end();
    }
    catch (e) {
        res.write("");
        return res.end();
    }
});
var PORT = 8091;
app.listen(PORT, function () { return console.log("Server is up and running on port ".concat(PORT)); });
