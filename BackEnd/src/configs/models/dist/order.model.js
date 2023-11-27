"use strict";
exports.__esModule = true;
exports.OrderModel = exports.OrderSchema = exports.OrderItemSchema = void 0;
var mongoose_1 = require("mongoose");
var games_model_1 = require("./games.model");
var order_status_1 = require("../constants/order_status");
exports.OrderItemSchema = new mongoose_1.Schema({
    game: { type: games_model_1.GameSchema, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});
exports.OrderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    item: { type: [exports.OrderItemSchema], required: true },
    totalPrice: { type: Number, required: true },
    paymentId: { type: String },
    status: { type: String, "default": order_status_1.OrderStatus.NEW },
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});
exports.OrderModel = mongoose_1.model('order', exports.OrderSchema);
