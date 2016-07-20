/**
 * Created by Administrator on 2016/7/15.
 */
$(function(){

    var urmroAllOrder = {};
    urmroAllOrder.allDown = true;
    touch.on($('.title span'),'tap',function(){
        var down = urmroAllOrder.allDown ? '0' : '-88px';
        $('.title span i').toggleClass('current');
        $('.allOrder').css('transform','translateY('+down+')');
        urmroAllOrder.allDown = !urmroAllOrder.allDown;
    })

    touch.on($('.allorderin div a'),'tap',function(){
        switch ($(this).attr('data-state')){
            case 'all':
                $('.allorderin div a').removeClass('current');
                $(this).addClass('current');
                $('.ordering li').css('display','block');
                break;
            case  'in':
                $('.allorderin div a').removeClass('current');
                $(this).addClass('current');
                $('.ordering li').css('display','none');
                $('.ordering .ongoing').css('display','block');
                break;
            case 'ok':
                $('.allorderin div a').removeClass('current');
                $(this).addClass('current');
                $('.ordering li').css('display','none');
                $('.ordering .itok').css('display','block');
                break;
            case 'no':
                $('.allorderin div a').removeClass('current');
                $(this).addClass('current');
                $('.ordering li').css('display','none');
                $('.ordering .cancel').css('display','block');
                break;
            default:
                throw("未正确加载或不支持该属性");
        }
    })
})