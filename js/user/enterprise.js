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
            //��ӡͼƬ·��
            dealImg(this.files[0]);
        }else{
            alert('ֻ֧��jpg,png,gif,jpeg��ʽ��ͼƬ');
            img.next().html('<strong>+</strong><img>');
        }
    })

    function dealImg(im){

        // ʵ����һ���ļ���ȡ��
        var reader = new FileReader;

        // ��ȡ�ո��ϴ����ļ�
        reader.readAsDataURL(im);

        reader.onload = function(){

            img.next().children('strong').remove();

            $('.mark img')[0].src = reader.result;

        }

    }
})()