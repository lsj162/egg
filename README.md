# `初始化`（官方只能 npm）

npm init egg --type=ts

# `目录结构`

    1.  路由
        - app
            - controller 控制器
            - + middleware 中间件
            - public 公共文件
            - + schedule 定时器
            - service
            - + view 视图
            - router.js 路由
        - config
            - config.default.js 覆盖默认配置，配置
            - plugin.js 插件
        - logs
        - test

# `添加配置`

    yarn

    koa-proxy
    egg-view-nunjucks
    egg-cors

# `环境变量`

# `支持`

    静态资源项目
    模板
    ts
    报错404
    跨域
    错误监控
    ...
