"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (ctx) => {
    ctx.body = 'Get all users';
};
exports.getUsers = getUsers;
const getUser = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Get user with ID ${id}`;
};
exports.getUser = getUser;
const createUser = async (ctx) => {
    try {
        const user = new user_1.default(ctx.request.body);
        await user.save();
        ctx.status = 201;
        ctx.body = user;
    }
    catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
};
exports.createUser = createUser;
const updateUser = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Update user with ID ${id}`;
};
exports.updateUser = updateUser;
const deleteUser = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Delete user with ID ${id}`;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map