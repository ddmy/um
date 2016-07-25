/**
 * Created by Administrator on 2016/7/18.
 */


(function () {
    var addLeft = $('.addressbottomleft').toArray();
    var lis = $('.address ul li').toArray();
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

            //执行添加默认
            updateAddressState($(lis[i]).children('.flag').html());

        })
    })

    del.forEach(function(v,i){
        touch.on(v,'tap',function(){
            var parLi =  $(v).parent().parent().parent(),
                parLiId = parLi.children('span').html();

            parLi.remove();

            //执行删除请求
            deleteAddres(parLiId);

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

    //删除收货地址
    function deleteAddres(id){
        if(id != null && id != ""){
            jQuery.ajax({
                type : "POST",
                url : "${ctx}/address/deleteAddress.html",
                dataType : "json",
                data : {'id':id},
                cache : false,
                contentType : "application/x-www-form-urlencoded; charset=utf-8",
                success : function(data) {
                    if(data.result){
                        window.location.reload();
                        return true;
                    }
                },
                error : function(obj) {
                    alert("服务器异常!!!");
                    return false;
                }
            });
        }else{
            alert("服务器异常！");
        }
    }


    //更新默认收货地址
    function updateAddressState(id){
        jQuery.ajax({
            type : "POST",
            url : "${ctx}/address/updateAddressState.html",
            dataType : "json",
            data : {"id":id},
            cache : false,
            contentType : "application/x-www-form-urlencoded; charset=utf-8",
            success : function(data) {
                if(data.result){
                    window.location.reload();
                    return true;
                }
            },
            error : function(obj) {
                alert("服务器异常!!!");
                return false;
            }
        });
    }



})()