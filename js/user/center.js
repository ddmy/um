/**
 * Created by Administrator on 2016/7/13.
 */
$(function(){
    //touch.on($(document),'drag',function(event){
    //    if(event.direction == 'up'){
    //        $('.entry').stop().animate({
    //            'bottom':'-49px'
    //        })
    //    }
    //    if(event.direction == 'down'){
    //        $('.entry').stop().animate({
    //            'bottom':'0'
    //        })
    //    }
    //})

    var urmroCenter = {};
    urmroCenter.listI = $('.list > ul > li > a > i');
    urmroCenter.bgs = $('.bg > ul > li > i');

    urmroCenter.listI.each(function(i,v){
        v.style.backgroundPositionY = -(129 + (i * (22 + 25))) +"px";
    })

    urmroCenter.bgs.each(function(i,v){
        v.style.backgroundPositionX = -(195 + (i * (28 + 25))) + 'px';
    })
})