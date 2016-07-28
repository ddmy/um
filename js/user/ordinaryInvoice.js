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
        $('title').html('增值税发票');
        $('.title span').html('增值税发票');
        $('.new a').html('新增增值税发票');
        $('.new a').attr('href','addTheVatInvoice.html');
    }
})