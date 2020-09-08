var btn = document.getElementsByClassName('nav-link');
var section = document.getElementsByClassName('section');
console.log(section);
console.log(section[0].offsetTop);

for (var i = 0; i < btn.length; i++) {
    (function (i) {
        btn[i].onclick=function () {
            buffer(document.documentElement,section[i].offsetTop,function () {

            })
        };
    })(i)
}

//滚动函数
function buffer(obj,num,fn) {

    //清除定时器
    clearInterval(obj.timer);

    //要滚动到的位置=指示器索引*
    var target=num;

    //speed速度
    var speed=0;

    //开启定时器
    obj.timer=setInterval(function () {
        //当前位置
        var start = Math.floor(obj.scrollTop);
        //速度=要去到的位置-当前位置*0.2
        speed=(target-start)*0.2;
        //根据速度的正负判断向上向下取整
        speed= target > start ? Math.ceil(speed):Math.floor(speed);
        //滚动
        obj.scrollTop+=speed;
        //清除定时器
        if (target === Math.floor(obj.scrollTop)) {
            fn();
            clearInterval(obj.timer);
        }
    },50)
}