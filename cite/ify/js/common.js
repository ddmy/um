/**
 * Created by zhousg on 2016/3/17.
 */
/*声明一个对象全局*/
/*在window下声明了一个itcast的对象*/
window.itcast = {};
/*在itcast下声明事件绑定函数*/
itcast.transitionEnd = function(dom,callback){
    if(typeof dom == 'object'){
        dom.addEventListener('webkitTransitionEnd',function(){
            callback && callback();
        });
        dom.addEventListener('transitionEnd',function(){
            callback && callback();
        });
    }
};
itcast.tap = function(dom,callback){
    /*判断dom是不是一个对象 如果是才给他绑定事件*/
    if(typeof dom == 'object'){
        /*判断是否滑动过*/
        var isMove = false;
        /*记录刚刚触摸到屏幕的时候的时间*/
        var time = 0;
        dom.addEventListener('touchstart',function(e){
            /*刚刚触摸到屏幕的时候的时间*/
            time = Date.now();
        });
        dom.addEventListener('touchmove',function(e){
            /*设置为true*/
            isMove = true;
        });
        window.addEventListener('touchend',function(e){
            /*
            * tap事件的要求
            *1.没有滑动过
            *2.响应时间在150ms以内
            * */
            if(!isMove && (Date.now()-time) < 150){
                /*为了提高响应的速度*/
                callback && callback(e);
            }

            isMove = false;
            time = 0;

        });

    }
};