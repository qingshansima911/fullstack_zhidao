import { Context } from 'koa';

export const getPosts = (ctx: Context) => {
  ctx.body = 'Get all posts';
};

export const getPost = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Get post with ID ${id}`;
};

export const createPost = (ctx: Context) => {
  ctx.body = 'Create a new post';
};

export const updatePost = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Update post with ID ${id}`;
};

export const deletePost = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Delete post with ID ${id}`;
};