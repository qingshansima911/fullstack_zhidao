import { Context } from 'koa';

export const getUsers = (ctx: Context) => {
  ctx.body = 'Get all users';
};

export const getUser = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Get user with ID ${id}`;
};

export const createUser = (ctx: Context) => {
  ctx.body = 'Create a new user';
};

export const updateUser = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Update user with ID ${id}`;
};

export const deleteUser = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Delete user with ID ${id}`;
};