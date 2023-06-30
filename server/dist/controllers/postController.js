"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = exports.getPosts = void 0;
exports.getPosts = (ctx) => {
    ctx.body = 'Get all posts';
};
exports.getPost = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Get post with ID ${id}`;
};
exports.createPost = (ctx) => {
    ctx.body = 'Create a new post';
};
exports.updatePost = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Update post with ID ${id}`;
};
exports.deletePost = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Delete post with ID ${id}`;
};
//# sourceMappingURL=postController.js.map