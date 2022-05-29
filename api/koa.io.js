let Koa = require('koa')
let app = new Koa()
const fs = require('fs')
const static = require('koa-static')   //静态资源服务插件
var Router = require('koa-router');
var router = new Router();
const path = require('path')
//const staticPath = './src/static'

const staticPath = './data'
const cors = require('koa2-cors')

// 配置静态web服务的中间件
app.use(static(
    path.join( __dirname,  staticPath)
  ))

//配置 cors 的中间件 
app.use(
  cors({
      origin: function(ctx) { //设置允许来自指定域名请求
          if (ctx.url === '/test') {
              return '*'; // 允许来自所有域名请求
          }
          return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
      },
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: true, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
)
router.get('/test', async (ctx) => {
  ctx.body = 'test-ok';
})

/*
router.get('/',async (ctx)=>{
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./src/pie.html')
})

router.get('/line',async (ctx)=>{
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./src/line.html')
})

router.get('/bar',async (ctx)=>{
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./src/bar.html')
})

router.get('/map',async (ctx)=>{
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./src/map.html')
})
router.get('/mapv',async (ctx)=>{
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./src/map-server.html')
})

router.get('/nav',async (ctx)=>{
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./src/nav.html')
})
*/

router.get('/slideimgs',async (ctx)=>{
  ctx.response.type = 'json'
  ctx.response.body = fs.createReadStream(path.resolve(__dirname + '/data/swiperimg.json'))
});

 
 /*启动路由*/
app.use(router.routes())   
.use(router.allowedMethods());     



app.listen(3003)
console.log('server running at http://localtion:3003')