"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = async (ctx, next) => {
    var _a;
    try {
        const token = (_a = ctx.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            await next();
            return;
        }
        const decodedToken = jsonwebtoken_1.default.verify(token, 'your-secret-key');
        ctx.user = { userId: decodedToken.userId };
        await next();
    }
    catch (error) {
        ctx.status = 401;
        ctx.body = { message: 'Authentication failed. Invalid token.' };
    }
};
exports.default = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map