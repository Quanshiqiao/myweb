//引入mongoose
let mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

//数据库名
const DB_NAME="Demo";
//数据库地址
const DB_URL="localhost:27017";

//向外暴露一个Promise对象
module.exports=new Promise((resolve,reject)=>{

    mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`,{ useUnifiedTopology: true ,useNewUrlParser: true});

    //监听是否链接成功
    mongoose.connection.on('open',(err)=>{

        if (!err){
            //连接成功
            console.log(`位于${DB_URL}上的${DB_NAME}数据库连接成功`);
            resolve()
        }else {
            //连接失败
            reject(err)
        }
    })

});