# vue-seed

> a vue & iview2 project template.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Project Directory
```json
.
├── README.md
├── build
├── config
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.vue                   # 入口文件
│   ├── api                       # api接口层
│   ├── assets                    # 资源包
│   ├── components                # 公共组件
│   ├── constant                  # 系统常量
│   ├── directives                # 公共指令
│   ├── filters                   # 公共过滤器
│   ├── main.js                   # 入口脚本
│   ├── mock                      # mock接口数据
│   ├── router                    # 全局路由
│   ├── store                     # vuex的store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── modules               # 模块化store
│   │   ├── mutations-type.js
│   │   └── mutations.js
│   ├── styles                    # 公共样式、主题
│   │   ├── main.scss
│   │   └── modules
│   │       └── common.scss
│   ├── utils                     # 工具库
│   └── views                     # 具体页面
├── static
└── test

```
