
let {Router} =require('express');

let gameModel = require('../db/gameModel');


let router = new Router();

//保存游戏数据
router.get('/game/test',(req,res)=>{
    //打印前端的数据
    console.log(req.query);
    //解构赋值 获取前端发送的数据
    let {user_name,user_value}=req.query;
    //数据写入数据库
    if (user_name!==""&&user_value!==""){
        gameModel.create({
            user_name,
            //保证存入数据库的是数值类型
            user_value:Number(user_value)
        },(err,data)=>{
            if (!err) {
                //写入成功
                console.log(data+"写入成功");
            }else {
                //写入失败
                console.log("写入失败");
            }
        })
    }
    res.send('上传成功')

});

//游戏排名
router.get('/game/value',(req,res)=>{

    try {
        //查询数据库 用时最少的
        gameModel.find({}).sort({'user_value':1}).limit(5).exec((err,docs)=>{
            if (!err) {
                // console.log(docs);
                console.log("查询成功");
                res.send(docs);
            }else {
                console.log("暂无数据...");
            }
        });
    }catch (e) {
        //查询错误
        console.log(e);
        res.send('阿欧,网络不稳定，请稍后再试');
    }

});


//暴露出去
module.exports = router;