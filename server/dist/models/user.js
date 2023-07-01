"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ""
    },
    foot: {
        type: Number,
        default: 0
    },
    answer: {
        type: Number,
        default: 0
    },
    note: {
        type: Number,
        default: 0
    },
    collect: {
        type: Number,
        default: 0
    },
    draft: {
        type: Number,
        default: 0
    },
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map