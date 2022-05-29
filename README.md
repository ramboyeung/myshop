[TOC]
# myshop

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 适配说明：
- 本项目采用的适配方案是"lib-flexible"（版本： "^0.3.2"）+ "postcss-pxtorem"（版本："^5.1.1"，注意需要额外配置postcss.config.js，reUnit设为37.5，与lib-flexible源码方案保持一致）,即html根字体大小在375px的可视设计图（即原稿是750px的，浏览器会缩小一半）中是10rem。由此得知：html:{font-size:10rem},那么375px的可视设计稿上，1px=0.1rem;(换算：375px/10rem=1px/xrem,则1px对应0.02667rem);
实验得知：375px可视设计图上200px的元素，换算成rem=0.02667*200=5.334rem。

- 注意：项目开发中一定要注意dpr。本项目使用的是375px的可视设计稿，375px的元素就会铺满整屏宽度。重要的事说三遍！写css时请按实际宽度/dpr（750px设计稿的dpr为2）。
或者，你也可借助图片工具pxcook，切换到web模式选择2px，直接用pxcook量得的宽度，不再需要除以2。

- 笔者使用pxcook的web模式，选择2px,写css是直接用px单位，pxcook量得多少px就写多少px，愉快至极！

### 项目避坑指南：
- 避坑指南1：
new vue({router:xxx})中的router属性名不能换成其他名字，否则会报错not match

- 避坑指南2：
项目要支持less,less-loader的版本要降级处理（建议使用4.1.0版本），因为高版本的有兼容性。

- 避坑指南3：
$route.path而不是$router.path，别写错，否则在某些情况下作判断是不会报错的，望山跑死马，这个错误比较难以发现

- 避坑指南4：
less-loader（推荐4.1.0）或者是node-sass均有高版本的兼容性问题，需降级处理。
postcss-pxtorem版本过高有兼容性问题，识别不了postcss，解决办法：降级为5.1.1版本。


### vue项目的其他移动端适配方案参考

除了本项目使用的老方案，还有其他简便的方案可参考：
方案一：

参考：https://www.cnblogs.com/XHappyness/p/15792482.html

适配方案：amfe-flexible + postcss-pxtorem,注意postcss-pxtorem版本不要超过6，否则运行编译会引起报错。

适配步骤：npm安装amfe-flexible和postcss-pxtorem => index.html中加meta视口 => main.js中引入amfe-flexible => 配置postcss.config.js文件（按750设计稿还是其他自己修改）
这样，我们就可以按原设计稿尺寸愉快地原样输出写px了。
```
npm i amfe-flexible@2.2.1 -S
npm i postcss-pxtorem@5.1.1 -D
```

方案二：
参考：https://www.cnblogs.com/zhangnan35/p/12682925.html

### less 的使用及常用语法
cli3使用less更为简单些，只需安装less依赖包即可
```
npm i less less-loader -D
```
然后在xx.vue文件中写入style即可。
```
<style lang="less">

</style>
```
### eslint规范：
eslint命名规范报错参考：https://blog.csdn.net/u013078755/article/details/123581070?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.pc_relevant_default&utm_relevant_index=1

## eslint报错
新增.prettierrc文件：
```
{
  "semi": false,
  "singleQuote": true
}
```

.eslintrc.js配置：
```
module.exports = {
  root: true,
  // 要启用的环境
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 启用 airbnb 规则
  // extends: 'airbnb-base','@vue/airbnb', 
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // 个人自定义规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi':0,
    'key-spacing': 0,
    'no-trailing-spaces':0,
  },
  // 使用语言及版本
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  // parserOptions: {
  //   parser: 'babel-eslint',
  // },
  plugins:['html', 'vue'],
};
```
eslint报错解决参考：

https://www.php.cn/tool/vscode/435419.html

https://www.it610.com/article/1297093574302703616.htm

## vscode配置自动修复eslint
参考：
http://t.zoukankan.com/layaling-p-10821529.html

文件 -> 首选项 -> 设置 ->找到eslint，往下扒拉找到settings.json，编辑json文件。
```
"vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "wrap_attributes": "force-aligned"
  },
  //配置eslint保存时自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // "editor.formatOnSave": true,  // 保存时自动格式化 --vscode编辑器自带自动格式化会与设置的eslint规范有所冲突导致eslint报错
  "eslint.autoFixOnSave": true, //保存时使用eslint规范自动格式化
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "prettier.eslintIntegration": true, // 让prettier使用eslint的代码格式进行校验 （如果未安装prettier或者不需要prettier格式化可以不用设置prettier这些属性）
  "prettier.semi": false,  // 去掉代码结尾的分号 
  "prettier.singleQuote": true,  // 使用带引号替代双引号 
```

## 本人使用的vscode中eslint相关json配置项（会自动格式化）：
```
{
  //配置eslint
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  // #去掉代码结尾的分号
  "prettier.semi": false,
  // #使用单引号替代双引号
  "prettier.singleQuote": true,
  // #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  "window.zoomLevel": 0,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "all",
  "workbench.iconTheme": "material-icon-theme",
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "eslint.migration.2_x": "off",
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "eslint.nodeEnv": "",
  "workbench.editor.enablePreview": false,
  "eslint.autoFixOnSave": true,
  "eslint.codeAction.disableRuleComment": {
    "enable": true,
    "location": "separateLine"
  },
  "eslint.rules.customizations": [
  
  ]
}
```

## git 常用操作：

第一次：远仓只有一个文件夹无代码的话pull不了（会报错）

git config --global user.name "ylb"

git config --global user.email "ylb@126.com"

ssh-keygen -t rsa -C "ylb@126.com"

cat ~/.ssh/id_rsa.pub

git remote add origin 远仓地址

git checkout -b ylb-dev

git branch ylb-dev-02

git rebase master

git checkout master

git rebase ylb-dev

git add . && git commit -m "feat:新增登录模块"

git push origin master
---
其他：

git config --global --list

git branch -vv

git remote -v

git pull origin master && git push -u origin master

git常规操作参考：https://www.cnblogs.com/coderxiaobai/p/14780195.html

git分支操作参考：https://www.cnblogs.com/mcat/p/5831212.html
---
vscode操作参考:

https://blog.csdn.net/yourstorm/article/details/123987260

https://www.csdn.net/tags/OtTaIgysMzY4OC1ibG9n.html

git变基：用rebase代替merge比较好，不会进行合并操作
https://www.csdn.net/tags/MtTaIg0sODY2ODAwLWJsb2cO0O0O.html

https://blog.csdn.net/wzdede/article/details/107896372
---

github怎么取消邮箱信息推送：

参考：https://www.csdn.net/tags/OtDaYgwsMTQ3NjQtYmxvZwO0O0OO0O0O.html




- mongodb避坑指南：
以默认安装目录为C盘为例：
1.在安装mongodb时不要选择compass图形化工具，因为会比较卡。
2.启动mongodb要使用cmd命令的管理员权限，否则报错0xc0000022；（之后就可以配置环境变量了）
3.启动如果出现闪退（超级坑），是因为mongodb安装目录data下缺少db文件夹,新建个db文件加然后打开cmd，进入到MongoDB的bin目录下，以管理员身份运行cmd,输入mongod --dbpath c:/data修复。若还出现shutting down with code:100错误，则在c盘根目录下建data/db目录即可。（先运行mongod，再运行mongo）


- 个人建议：
在 package.json 里最好将版本写死，或者写成 ~2.5.7 的形式
而默认的写法 ^2.5.7 会自动下载 2.x.x 版本的模块，如果有新员工加入，很有可能装了最新的包，导致他的环境与你的或者线上的有很大出入

项目中发现的问题：
路由重复点击报错   ====》改写路由原型上的push或replace方法的this并捕捉错误即可解决
