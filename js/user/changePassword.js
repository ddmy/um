/**
 * Created by Administrator on 2016/7/19.
 */


(function(){
    var flag = 1,
        ipt = $("input").toArray();
    touch.on($('.action'),'tap',function(){
        $(ipt).each(function(i,v){
            if(v.value == ''){
                flag = 0;
                return;
            } else if(ipt[1].value.length < 5 || ipt[1].value.length > 17){
                flag = 2;
                return;
            }else if(ipt[1].value != ipt[2].value){
                flag = 3;
                return;
            }
        })
        switch (flag){
            case 0:
                alert('不能为空，请认真填写');
                break;
            case 2:
                alert('密码长度在6位到16位之间');
                break;
            case 3:
                alert('两次输入的密码不一致');
                break;
            default :
                amend(ipt[0].value,ipt[1].value);
                null;
        }
    })

    function amend(oldpasd,newpasd){
        console.log('旧密码是:'+oldpasd);
        console.log('新密码是:'+newpasd);
    }
})()