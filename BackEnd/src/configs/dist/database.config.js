"use strict";
exports.__esModule = true;
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
exports.dbConnect = function () {
    mongoose_1.connect(process.env.MONGO_URI, {
    }).then(function () { return console.log("connected to MongoDB Atlas succesfully");
 }, function (error) { return console.log(error); });
};
