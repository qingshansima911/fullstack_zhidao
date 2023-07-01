import Koa from 'koa';
import usersRouter from './routers/user';
import postsRouter from './routers/post';
import xingqiusRouter from './routers/xingqiu';
import Router from '@koa/router';
import staticServer from 'koa-static';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import auth from './middleware/auth.middleware'
mongoose
  .connect('mongodb://127.0.0.1:27017/zhidao', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = new Koa();
// 静态服务器
app.use(staticServer('public'));
// 跨域中间件
app.use(cors());
// bodyParser 中间件
app.use(bodyParser());
app.use(auth);
const port = 3000;
const router = new Router({
  prefix: '/api/v1', // 设置公共前缀
});

router.use(usersRouter.routes());
router.use(postsRouter.routes());
router.use(xingqiusRouter.routes());
app.use(router.routes());

// 错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err.stack);
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});