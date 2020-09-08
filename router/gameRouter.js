//引入mongoose
let mongoose = require('mongoose');

let Schema = mongoose.Schema


let userSchema = new Schema({
    user_name:{
        type:String,
    },
    user_time:{
        type: String
    }
});