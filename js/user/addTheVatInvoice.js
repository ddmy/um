/**
 * Created by Administrator on 2016/7/18.
 */


(function(){
    var flag = true;
    touch.on($('.ok a'),'tap',function(){
        $('input').each(function(i,v){
            if(v.value.length < 1){
                flag = false;
            }
        })
        if(flag){
            ok();
        }else{
            alert('请填写完整哦');
        }
    })

    function ok(){
        alert('保存成功');
    }
})()