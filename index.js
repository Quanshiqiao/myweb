//引入express
let express = require('express');
let app = new express();

//引入数据库连接对象
let db = require('./db/db');

//ui路由 根据url返回页面
let uiRouter = require('./router/uiRouter');

//游戏路由
let gameRouter= require('./router/gameRouter');

//等待数据库连接成功
db.then(()=>{


    // 暴露静态资源
    app.use(express.static('public'));

    //ui路由 根据请求的url 返回指定页面
    app.use(uiRouter);

    //游戏业务的路由
    app.use(gameRouter)


}).catch((err)=>{
    // 连接失败
    console.log("数据库连接失败");
    console.log(err);
});


//监听3000端口
app.listen(3000,(err)=>{
    if(!err){
        console.log('http://localhost:3000/');
    }else {
        console.log("启动失败",err);
    }
});

