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
