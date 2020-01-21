import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  // ! 监听ip
  config.cluster = {
    listen: {
      path: '',
      port: 7000,
      hostname: '127.0.0.1',
    }
  };

  // ! 本地代理
  config.proxy = {
    host: 'http://127.0.0.1:8000',
    match: /^\/api\//,
  };

  return config;
};
