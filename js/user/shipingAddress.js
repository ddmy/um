/**
 * Created by Administrator on 2016/7/18.
 */


(function () {
    var addLeft = $('.addressbottomleft').toArray();
    var del = $('.del').toArray();
    addLeft.forEach(function (v, i) {
        touch.on(v, 'tap', function () {
            var flag, cls, htm;
            flag = !$(v).children('i').hasClass('current');
            if(v.querySelector('i').className == ''){
                addLeft.forEach(function (val, inde) {
                    cls = eval(flag).cls;
                    htm = eval(flag).htm;
                    test(val, cls, htm);
                })
            }
            flag = !flag;
            cls = eval(flag).cls;
            htm = eval(flag).htm;
            test(v, cls, htm);
        })
    })

    del.forEach(function(v,i){
        touch.on(v,'tap',function(){
            $(v).parent().parent().parent().remove();
        })
    })
    function eval(flag) {
        cls = flag ? '' : 'current';
        htm = flag ? '设为默认' : '默认地址';
        return {
            cls: cls,
            htm: htm
        }
    }

    function test(v, cls, htm) {
        v.querySelector('i').className = cls;
        v.querySelector('span').innerHTML = htm;
    }

})()