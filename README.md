# 安装EGG（TypeScript）
npm init egg --type=ts

# 依赖包
koa-proxy
egg-view-nunjucks
egg-cors

# 本地启动
yarn stop && yarn tsc && EGG_SERVER_ENV=local yarn start

# 生产启动
yarn stop && yarn tsc && EGG_SERVER_ENV=prod yarn start

# 目录指南
- app
    - controller 控制器
        - *
    - public 公共文件
        - *
    - schedule 定时器
        - *
    - view 视图
        - *
    - app.js

    - router.js 路由

- config
    - config.default.js 覆盖默认配置，配置

    - plugin.js 插件

- logs
    - 日志

# 支持
    静态资源项目
    模板
    ts
    报错404
    跨域
    错误监控

# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
