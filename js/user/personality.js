/**
 * Created by Administrator on 2016/7/19.
 */


(function(){
    var boxLis = $('.check'),
        radioLis = $('.radio');

   boxLis.each(function(i,v){
       touch.on($(v).find('li'),'tap',function(){
           $(this).toggleClass('current');
       })
   })
   radioLis.each(function(i,v){
       touch.on($(v).find('li'),'tap',function(){
           $(v).find('li').each(function(i,v){
               $(v).removeClass('current');
           })
           $(this).addClass('current');
       })
   })

})()