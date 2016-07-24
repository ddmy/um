/**
 * Created by Administrator on 2016/7/12.
 */

(function(){
    var urmroUser = {};

    //��¼ҳ��
    urmroUser.mobileVal = document.querySelectorAll('.login-ok input')[0] || null;
    urmroUser.pasdwVal = document.querySelectorAll('.login-ok input')[1] || null;
    urmroUser.loginOk = document.querySelector('.login-login-ok') || null;

    //ע��ҳ��
    urmroUser.enrollMobile = document.querySelectorAll('.enroll input')[0] || null;
    urmroUser.enrollCode= document.querySelectorAll('.enroll input')[1] || null;
    urmroUser.enrollPasdw = document.querySelectorAll('.enroll input')[2] || null;
    urmroUser.enrollGainCode = document.querySelector('.gain-code') || null;
    urmroUser.enrollOk = document.querySelector('.enroll-ok') || null;

    //����
    urmroUser.Rmobile = /^1[3578]\d{9}$/;
    urmroUser.Rpasdw = /^[0-9a-zA-Z]{6,16}$/;

    //����ʱ��ȡ��֤�뺯��
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
                urmroUser.enrollGainCode.innerHTML = '��ȡ��֤��';
            }
        },1000)
    };

    urmroUser.gainCode = function(){
        if(!urmroUser.Rmobile.test(urmroUser.enrollMobile.value)){
            alert('��������ֻ�������');
            urmroUser.enrollMobile.value = '';
            return false;
        }else{
            urmroUser.GainCodeFlag ? urmroUser.byTime() : null;
        }
    };


    //��¼���
    if(urmroUser.loginOk){
        touch.on(urmroUser.loginOk,'tap',function(){
            var hint = '';
            if(!urmroUser.Rmobile.test(urmroUser.mobileVal.value)){
                hint = '��������ֻ������� ';
                urmroUser.mobileVal.value = '';
            }
            if(!urmroUser.Rpasdw.test(urmroUser.pasdwVal.value)){
                hint += '��������Ϊ6��16λ�����ַ�';
                urmroUser.pasdwVal.value = '';
            }
            if(hint != ''){
                alert(hint + ',������������');
                return false;
            }
        })
    }

    //ע����
    if(urmroUser.enrollOk){

        touch.on(urmroUser.enrollGainCode,'tap',urmroUser.gainCode);

        touch.on(urmroUser.enrollOk,'tap',function(){
            var hint = '';
            if(!urmroUser.Rmobile.test(urmroUser.enrollMobile.value)){
                hint = '��������ֻ�������';
                urmroUser.enrollMobile.value = '';
            }
            if(!urmroUser.Rpasdw.test(urmroUser.enrollPasdw.value)){
                hint = ' ��������Ϊ6��16λ�����ַ���������Ĳ���ȷ';
                urmroUser.enrollPasdw = '';
            }
            if(hint != ""){
                alert(hint + ',������������');
            }
            return false;
        });
    }




})()
