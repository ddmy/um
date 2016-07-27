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
            //打印图片路径
            dealImg(this.files[0]);
        }else{
            alert('只支持jpg,png,gif,jpeg格式的图片');
            img.next().html('<strong>+</strong><img>');
        }
    })

    function dealImg(im){

        // 实例化一个文件读取器
        var reader = new FileReader;

        // 读取刚刚上传上文件
        reader.readAsDataURL(im);

        reader.onload = function(){

            img.next().children('strong').remove();

            $('.mark img')[0].src = reader.result;

        }

    }
})()