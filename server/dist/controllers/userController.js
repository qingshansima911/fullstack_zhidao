"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
const register = async (ctx) => {
    try {
        const { name, password } = ctx.request.body;
        const existingUser = await user_1.default.findOne({ name });
        if (existingUser) {
            ctx.throw(400, 'Username already exists');
        }
        console.log(name, password, '.......');
        const saltRounds = 10;
        const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
        const newUser = new user_1.default({
            name,
            password: hashedPassword,
        });
        await newUser.save();
        ctx.status = 201;
        ctx.body = { message: 'User registered successfully' };
    }
    catch (error) {
        ctx.throw(500, error.message);
    }
};
exports.register = register;
const login = async (ctx) => {
    try {
        const { name, password } = ctx.request.body;
        const user = await user_1.default.findOne({ name });
        if (!user) {
            ctx.status = 401;
            ctx.body = { message: 'Invalid username or password' };
            return;
        }
        const passwordMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordMatch) {
            ctx.status = 401;
            ctx.body = { message: 'Invalid username or password' };
            return;
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1d',
        });
        ctx.status = 200;
        ctx.body = { token };
    }
    catch (error) {
        ctx.throw(500, error.message);
    }
};
exports.login = login;
//# sourceMappingURL=userController.js.map