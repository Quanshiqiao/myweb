//引入express
let express = require('express');
let app = new express();

//引入数据库连接对象
let db = require('./db/db');

//ui路由 根据url返回页面
let uiRouter = require('./router/uiRouter');

//等待数据库连接成功
db.then(()=>{


    // 暴露静态资源
    app.use(express.static('public'));

    app.use(uiRouter)


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

