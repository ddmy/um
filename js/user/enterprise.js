/**
 * Created by Administrator on 2016/7/19.
 */
(function(){
   var img = $("[type='file']");
    img.change(function(){
        var val = img.val(),
            lastName = val.substr(val.lastIndexOf('.') + 1).toUpperCase();
        switch (lastName){
            case 'JPG':
                lastName = true;
                break;
            case 'PNG':
                lastName = true;
                break;
            case 'GIF':
                lastName = true;
                break;
            case 'JPEG':
                lastName = true;
                break;
            default :
                lastName = false;

        }
        if(lastName){
            //´òÓ¡Í¼Æ¬Â·¾¶
            console.log(val);
        }else{
            img.next().html('+');
        }
    })
})()