/**
 * Created by Administrator on 2016/7/18.
 */
$(function(){
    var inv = window.location.hash || null,
        arr = [];
    if(inv){
        inv = inv.replace(/#/g,'');

        arr = inv.split('=');

        if(arr[0] == 'inv' && arr[1] == 'true'){
            vat();
        }
    }

    function vat(){
        $('title').html('��ֵ˰��Ʊ');
        $('.title span').html('��ֵ˰��Ʊ');
        $('.new a').html('������ֵ˰��Ʊ');
        $('.new a').attr('href','addTheVatInvoice.html');
    }
})