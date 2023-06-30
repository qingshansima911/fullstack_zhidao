"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const getPosts = (ctx) => {
    ctx.body = 'Get all posts';
};
exports.getPosts = getPosts;
const getPost = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Get post with ID ${id}`;
};
exports.getPost = getPost;
const createPost = (ctx) => {
    ctx.body = 'Create a new post';
};
exports.createPost = createPost;
const updatePost = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Update post with ID ${id}`;
};
exports.updatePost = updatePost;
const deletePost = (ctx) => {
    const { id } = ctx.params;
    ctx.body = `Delete post with ID ${id}`;
};
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map