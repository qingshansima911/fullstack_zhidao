# fullstack_zhidao
fullstack_zhidao
- server 
  npm init -y   
    package.json   
  tsconfig.json  
  src / main.ts  
  npm i koa @koa/router  
  假如你是一位node后端工程师， 请使用typescript ， 框架用koa 路由用@koa/router   请编写 users和 posts 两个模块 分别在routers和controllers 目录  创建相应满足restful 机制的 代码， controllers 只需要返回 相应resutful 的方法和模块名就好， main.ts 里加载users 和posts两个路由 请给出代码 
  公共前缀  
  dotenv npm i dotenv 让port用env提供
  假如你是一位node 开发工程师，使用koa typescript 开发，数据库mongodb 基于mongoose orm  请完成jwt 登录功能   请在 userRouter下添加 login  register 路由  在 userController 下添加相应的控制器 对密码加密  并在middlewares 添加一个auth 中间件  帮助解析token 到ctx.user 对象中

- 项目亮点
  - ts-watch用typescript结合koa开发 

- jwt 
  JWT的主要用途是进行用户身份验证和授权。  
  当用户成功登录并通过身份验证时，服务器会生成一个JWT令牌，并将其返回给客户端。客户端在后续的请求中携带该令牌，服务器通过验证令牌的签名和有效性来验证用户的身份和授权访问受保护的资源。  