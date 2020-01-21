import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
  // ? 静态页面
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  // ? 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },

};

export default plugin;
