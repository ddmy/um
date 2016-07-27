/**
 * Created by Administrator on 2016/7/27.
 */
window.onload = function(){

    (function(){

        var cartnum = $('.cartnum')[0],
            cartnumin = cartnum.innerHTML || 0;

        touch.on($('.addcart'),'tap',function(){

            cartnum.innerHTML = ++ cartnumin;

        })

    })()

}