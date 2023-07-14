"use strict";
var express = require('express');
var app = express();
var port = process.env.PORT || 5001;
// Define your routes and middleware here
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
