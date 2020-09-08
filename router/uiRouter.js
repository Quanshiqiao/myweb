
let {Router} = require('express');
let router= new Router();

let {resolve}=require('path');


router.get('/',(request,respon)=>{
    //文件路径          从当前文件夹触发，往上一级找到public里面的index.html
    let filePath=resolve(__dirname,'../public/index.html');
   respon.sendFile(filePath)
});

module.exports = router
