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
                alert('����Ϊ�գ���������д');
                break;
            case 2:
                alert('���볤����6λ��16λ֮��');
                break;
            case 3:
                alert('������������벻һ��');
                break;
            default :
                amend(ipt[0].value,ipt[1].value);
                null;
        }
    })

    function amend(oldpasd,newpasd){
        console.log('��������:'+oldpasd);
        console.log('��������:'+newpasd);
    }
})()