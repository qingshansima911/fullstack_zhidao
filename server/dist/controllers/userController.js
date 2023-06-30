"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
exports.getUsers = (ctx) => {
    ctx.body = 'Get all users';
};
exports.getUser = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Get user with ID ${id}`;
};
exports.createUser = (ctx) => {
    ctx.body = 'Create a new user';
};
exports.updateUser = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Update user with ID ${id}`;
};
exports.deleteUser = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Delete user with ID ${id}`;
};
//# sourceMappingURL=userController.js.map