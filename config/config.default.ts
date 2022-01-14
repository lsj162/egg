import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
const fs = require("fs");
const path = require("path");

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1579574404231_7633";

  // -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  // add your egg config in here
  config.middleware = ["proxy"];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  // ! 监听ip
  config.cluster = {
    listen: {
      path: "",
      port: 7000,
      hostname: "127.0.0.1",
    },
  };

  // ! 本地代理
  config.proxy = {
    host: "http://127.0.0.1:8000",
    match: /^\/api\//,
  };

  // ? csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

  // ? 404页面
  config.notfound = {
    pageUrl: "/404.html",
  };

  // ? 显示html模板框架
  config.view = {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".html": "nunjucks",
    },
  };

  // * 静态资源配置
  config.static = {
    prefix: "/",
    dir: [
      path.join(__dirname, "../app/view"),
      path.join(__dirname, "../app/public"),
    ], // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };

  // * favicon图标
  config.siteFile = {
    "/favicon.ico": fs.readFileSync(
      path.join(__dirname, "../app/public/favicon.png")
    ),
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
