//暴露一个数据库操作对象


// 引入mongoose
let mongoose = require('mongoose');

let Schema = mongoose.Schema;


/*
user_name 玩家名
user_value 玩家成绩
date 上传时间
 */
let gameSchema = new Schema({
    user_name:{
        type:String,
        default:"路人甲"
    },
    user_value:{
        type: String,
    },
    date:{
        type:Date,
        default: Date.now()

    }
});

module.exports=mongoose.model('game',gameSchema);