"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xingqiu_1 = __importDefault(require("../models/xingqiu"));
const xingqiuController = {
    async getAllXingqius(ctx) {
        try {
            const xingqius = await xingqiu_1.default.find({}).populate('author');
            ctx.status = 200;
            ctx.body = xingqius;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async getXingqiuById(ctx) {
        const { id } = ctx.params;
        try {
            const xingqiu = await xingqiu_1.default.findById(id);
            if (!xingqiu) {
                ctx.throw(404, 'Xingqiu not found');
            }
            ctx.status = 200;
            ctx.body = xingqiu;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async createXingqiu(ctx) {
        const { album, title, author } = ctx.request.body;
        try {
            const newXingqiu = new xingqiu_1.default({
                album,
                title,
                author,
            });
            await newXingqiu.save();
            ctx.status = 201;
            ctx.body = newXingqiu;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async updateXingqiu(ctx) {
        const { id } = ctx.params;
        const { album, title, author } = ctx.request.body;
        try {
            const updatedXingqiu = await xingqiu_1.default.findByIdAndUpdate(id, {
                album,
                title,
                author,
            }, { new: true });
            if (!updatedXingqiu) {
                ctx.throw(404, 'Xingqiu not found');
            }
            ctx.status = 200;
            ctx.body = updatedXingqiu;
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
    async deleteXingqiu(ctx) {
        const { id } = ctx.params;
        try {
            const deletedXingqiu = await xingqiu_1.default.findByIdAndDelete(id);
            if (!deletedXingqiu) {
                ctx.throw(404, 'Xingqiu not found');
            }
            ctx.status = 200;
            ctx.body = { message: 'Xingqiu deleted successfully' };
        }
        catch (error) {
            ctx.throw(500, error);
        }
    },
};
exports.default = xingqiuController;
//# sourceMappingURL=xingqiuController.js.map