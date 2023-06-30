import { Context } from 'koa';
import User from '../models/user';

export const getUsers = (ctx: Context) => {

  ctx.body = 'Get all users';
};

export const getUser = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Get user with ID ${id}`;
};

export const createUser = async (ctx: Context) => {
  try {
    const user = new User(ctx.request.body);
    await user.save();
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};

export const updateUser = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Update user with ID ${id}`;
};

export const deleteUser = (ctx: Context) => {
  const { id } = ctx.params;
  ctx.body = `Delete user with ID ${id}`;
};