"use strict";
exports.__esModule = true;
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
exports.dbConnect = function () {
    mongoose_1.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log("connected succesfully"); }, function (error) { return console.log(error); });
};
