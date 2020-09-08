
let {Router} = require('express');
let router= new Router();

let {resolve}=require('path');


//首页
router.get('/',(request,respon)=>{
    //文件路径          从当前文件夹触发，往上一级找到public里面的index.html
    let filePath=resolve(__dirname,'../public/index.html');
   respon.sendFile(filePath)
});

//游戏
router.get('/game',(req,res)=>{
    let filePaht=resolve(__dirname,'../public/game.html');
    res.sendFile(filePath)
});

module.exports = router;
