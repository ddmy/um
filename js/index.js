/**
 * Created by mydre on 2016/7/8.
 */

(function(){

    var urmroIndex = {};
    urmroIndex.header = $('.header')[0];
    urmroIndex.bannerHeight = $('.swiper-container').height();
    urmroIndex.headerOpacity = 0;

    //头部背景色0到1
    urmroIndex.headerRgba = function(){
        urmroIndex.headerOpacity = urmroIndex.headerOpacity > 1 ? 1 : $(window).scrollTop() / urmroIndex.bannerHeight;
        urmroIndex.header.style.backgroundColor = 'rgba(221,51,51,' + urmroIndex.headerOpacity + ')';
    };

    $(window).scroll(function(){
        urmroIndex.headerRgba();
    })

    touch.on(window,'drag',function(){
        urmroIndex.headerRgba();
    })


    //nav八个样式
    urmroIndex.navColor = ['#69f','#6cc','#f66','#dd3','#c3c','#f93','#9c3','#666'];
    urmroIndex.navLis = $('.nav li a');
    urmroIndex.navLisLength = urmroIndex.navLis.length;
    urmroIndex.navLis.each(function(i,v){
        var positionX = i == 0 ? '0' : (-47 * i) + 'px';
        $(v).css({
            'background-color' : urmroIndex.navColor[i],
            'background-position' : ''+positionX+' -98px'
        });
    })

    //底部入口样式效果
    urmroIndex.entry = $('.entry a');
    urmroIndex.entry.each(function(i,v){
        touch.on($(v),'tap',function(){
            urmroIndex.entry.removeClass('current');
            $(v).toggleClass('current');
        })
    })

})();

//$(function(){
//    var flag = true;
//    touch.on($(document),'drag',function(event){
//        if(event.direction == 'up'){
//            //if(flag == true){
//            //    $('.entry')[0].style.transition = 'all 0.5s';
//            //    $('.entry')[0].style.transform = 'translateY(49px)';
//            //    flag = false;
//            //    setTimeout(function(){
//            //        flag = true;
//            //    },600);
//            //}
//            $('.entry').stop().animate({
//                'bottom':'-49px'
//            })
//        }
//        if(event.direction == 'down'){
//            //if(flag == true){
//            //    $('.entry')[0].style.transform = 'translateY(0px)';
//            //    flag = false;
//            //    setTimeout(function(){
//            //        flag = true;
//            //    },600);
//            //}
//            $('.entry').stop().animate({
//                'bottom':'0'
//            })
//        }
//    })
//})