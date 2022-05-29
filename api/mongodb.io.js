var mongoClient = require("mongodb").MongoClient;
var url="mongodb://localhost:27017/";
var dbName="koa";//创建了一个叫koa的数据库
mongoClient.connect(url,function (err,client){
  if(err){
    console.log(err);
    return;
  }
  var db = client.db(dbName);

  //在koa数据库下创建了一个集合list，并在list集合里新增了一条数据（js每执行一次就创建一条）
  db.collection("list").insertOne({name:"张三",age:55,sex:"male"},function (err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    db.collection("list").update({name:"张三"},{name:"张巴"},false);

    client.close();//断开数据库连接
  });

  

})