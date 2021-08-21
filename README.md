# product-template

## Project directory

```
├─public                         // 页面入口及配置
├─src                            // 项目
│    ├─common                    // 公共文件
│    │  ├─css                    // 公共css
│    │  ├─js                     // 公共js
│    │  │  └─rules               // 表单校验
│    │  └─requestUrl             // 请求
│    └─product                      // 页面
│        ├─product                  // 前台展示
│        │  ├─assets             // 静态文件
│        │  │  ├─css             // 样式
│        │  │  ├─font            // 字体
│        │  │  └─images          // 图片
│        │  ├─components         // 组件
│        │  └─views              // 页面
│        └─productManagement        // 后台管理
│            ├─assets            // 静态文件
│            │  ├─css            // 样式
│            │  └─images         // 图片
│            ├─components        // 组件
│            └─views             // 页面
├─package.json                   // 项目描述及依赖
└─vue.config.js                  // vue和webpack配置
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
