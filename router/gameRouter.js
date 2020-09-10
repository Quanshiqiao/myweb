
let {Router} =require('express');

let gameModel = require('../db/gameModel');


let router = new Router();


router.get('/game/test',(req,res)=>{
    //打印前端的数据
    console.log(req.query);
    //解构赋值 获取前端发送的数据
    let {user_name,user_value}=req.query;
    //数据
    if (user_name!==""&&user_value!==""){
        gameModel.create({
            user_name,
            user_value
        })
    }

    res.send('上传成功')

});



//暴露出去
module.exports = router;