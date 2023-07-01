import { Context } from 'koa';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const getUsers = (ctx: Context) => {
  // console.log(ctx.user, '------')
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

export const register = async (ctx: Context) => {
  try {
    const { name, password } = ctx.request.body;
    // 检查用户是否已存在
    const existingUser = await User.findOne({ name });
    if (existingUser) {
      ctx.throw(400, 'Username already exists');
    }
    console.log(name, password, '.......');
    // 创建新用户
    const saltRounds = 10;
    // 对密码进行加密
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name,
      password: hashedPassword,
    });
    await newUser.save();

    ctx.status = 201;
    ctx.body = { message: 'User registered successfully' };
  } catch (error) {
    ctx.throw(500, error.message);
  }
};

export const login = async (ctx: Context) => {
  try {
    const { name, password } = ctx.request.body;

    // 验证用户身份
    const user = await User.findOne({ name });
    if (!user) {
      ctx.status = 401;
      ctx.body = { message: 'Invalid username or password' };
      return;
    }
    // 验证密码
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      ctx.status = 401;
      ctx.body = { message: 'Invalid username or password' };
      return;
    }

    // 生成 JWT JWT的主要用途是进行用户身份验证和授权
    // 当用户成功登录并通过身份验证时，服务器会生成一个JWT令牌，
    // 并将其返回给客户端。客户端在后续的请求中携带该令牌，
    // 服务器通过验证令牌的签名和有效性来验证用户的身份和授权访问受保护的资源。
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
      expiresIn: '1d',
    });

    ctx.status = 200;
    ctx.body = { token };
  } catch (error) {
    ctx.throw(500, error.message);
  }
};