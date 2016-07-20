/**
 * Created by Administrator on 2016/7/19.
 */
(function(){
    var oldphone = $('.oldphone')[0],
        newphone = $('.newphone')[0],
        oldm = $('.oldm')[0],
        newm = $('.newm')[0],
        oldflag = true,
        newflag = true,
        oldtimer = null,
        newtimer = null,
        oldnum = 60,
        newnum = 60,
        Rmobile = /^1[3578][0-9]{9}$/;



    touch.on(oldphone,'tap',function(){
        if(oldflag && Rm(oldm.value)) action(oldphone,oldflag,oldtimer,oldnum);
    });

    touch.on(newphone,'tap',function(){
        if(newflag && Rm(newm.value)) action(newphone,newflag,newtimer,newnum);
    });

    function Rm(val){
        return Rmobile.test(val) ? true : (function(){ alert('手机号码格式不正确'); return false; })();
    }

    function action(phone,flag,time,num){
        if(flag){
            flag = false;
            time = setInterval(function(){
                num = num == 0 ? 0 : --num;
                phone.innerHTML = num + 's';
                if(num == 0){
                    clearInterval(time);
                    time = null;
                    phone.innerHTML = '获取验证码';
                    flag = true;
                }
            },1000);
        }

    }



})()