"use strict";
exports.__esModule = true;
exports.gameModel = exports.GameSchema = void 0;
var mongoose_1 = require("mongoose");
// Schema
exports.GameSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    tags: { type: [String] },
    favourite: { type: Boolean, "default": false },
    stars: { type: Number, required: true },
    owned: { type: Boolean, "default": false },
    author: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    specialOffer: { type: Boolean, "default": false },
    price: { type: Number || String, required: true }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
exports.gameModel = mongoose_1.model('game', exports.GameSchema);
