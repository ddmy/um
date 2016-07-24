/**
 * Created by Administrator on 2016/7/12.
 */

(function(){
    var urmroUser = {};

    //登录页面
    urmroUser.mobileVal = document.querySelectorAll('.login-ok input')[0] || null;
    urmroUser.pasdwVal = document.querySelectorAll('.login-ok input')[1] || null;
    urmroUser.loginOk = document.querySelector('.login-login-ok') || null;

    //注册页面
    urmroUser.enrollMobile = document.querySelectorAll('.enroll input')[0] || null;
    urmroUser.enrollCode= document.querySelectorAll('.enroll input')[1] || null;
    urmroUser.enrollPasdw = document.querySelectorAll('.enroll input')[2] || null;
    urmroUser.enrollGainCode = document.querySelector('.gain-code') || null;
    urmroUser.enrollOk = document.querySelector('.enroll-ok') || null;

    //正则
    urmroUser.Rmobile = /^1[3578]\d{9}$/;
    urmroUser.Rpasdw = /^[0-9a-zA-Z]{6,16}$/;

    //倒计时获取验证码函数
    urmroUser.GainCodeFlag = true;
    urmroUser.byTime = function(){
        var timer = null,
            num = 10;
        urmroUser.GainCodeFlag = false;
        clearInterval(timer);
        timer = setInterval(function(){
            num--;
            urmroUser.enrollGainCode.innerHTML = num + 's';
            if(num == 0){
                clearInterval(timer);
                timer = null;
                urmroUser.GainCodeFlag = true;
                num = 10;
                urmroUser.enrollGainCode.innerHTML = '获取验证码';
            }
        },1000)
    };

    urmroUser.gainCode = function(){
        if(!urmroUser.Rmobile.test(urmroUser.enrollMobile.value)){
            alert('您输入的手机号有误');
            urmroUser.enrollMobile.value = '';
            return false;
        }else{
            urmroUser.GainCodeFlag ? urmroUser.byTime() : null;
        }
    };


    //登录检测
    if(urmroUser.loginOk){
        touch.on(urmroUser.loginOk,'tap',function(){
            var hint = '';
            if(!urmroUser.Rmobile.test(urmroUser.mobileVal.value)){
                hint = '您输入的手机号有误 ';
                urmroUser.mobileVal.value = '';
            }
            if(!urmroUser.Rpasdw.test(urmroUser.pasdwVal.value)){
                hint += '密码限制为6到16位数字字符';
                urmroUser.pasdwVal.value = '';
            }
            if(hint != ''){
                alert(hint + ',请您重新输入');
                return false;
            }
        })
    }

    //注册检测
    if(urmroUser.enrollOk){

        touch.on(urmroUser.enrollGainCode,'tap',urmroUser.gainCode);

        touch.on(urmroUser.enrollOk,'tap',function(){
            var hint = '';
            if(!urmroUser.Rmobile.test(urmroUser.enrollMobile.value)){
                hint = '您输入的手机号有误';
                urmroUser.enrollMobile.value = '';
            }
            if(!urmroUser.Rpasdw.test(urmroUser.enrollPasdw.value)){
                hint = ' 密码限制为6到16位数字字符，您输入的不正确';
                urmroUser.enrollPasdw = '';
            }
            if(hint != ""){
                alert(hint + ',请您重新输入');
            }
            return false;
        });
    }




})()
