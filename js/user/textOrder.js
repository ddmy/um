/**
 * Created by Administrator on 2016/7/17.
 */
(function(){
    var str = 'abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789',
        rand = '',
        time = '';
    $('.datetime').change(function(){
        $('.selecttime').html($('.datetime').val());
    })
    touch.on($('.submitorder'),'tap',function(){
        if($('.datetime').val() == ''){
            alert('��ѡ������ʱ��');
        }else{
            for(var i = 0; i < 33; i += 1){
                rand += str[parseInt(Math.random() * 58)];
            }
            time = new Date().getTime();
            submitOrder(rand,time);
            rand = '';
        }
    })


    function submitOrder(num,time){
        alert('�ύ�ɹ�');
        console.log(num + '---' + time);
        window.location.href = 'okpay.html';
    }
})()