"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, "default": false }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.UserModel = mongoose_1.model('user', exports.UserSchema);
