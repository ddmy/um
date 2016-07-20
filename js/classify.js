/**
 * Created by Administrator on 2016/7/13.
 */

(function(){
    $('.ifymain').height($(window).height());

    var urmroIfy = {};
    urmroIfy.slide = $('.swiper-slide');
    urmroIfy.slideHeight = urmroIfy.slide.height();
    urmroIfy.slideLength =  16;
    urmroIfy.ifyMain = $('.ifymain').height() - urmroIfy.slideHeight;
    urmroIfy.slideGo = urmroIfy.slideLength - parseInt(urmroIfy.ifyMain / urmroIfy.slideHeight);
    urmroIfy.slideGoY = -urmroIfy.slideGo * 44;


    //∑÷¿‡“≥µº∫Ω≈‰÷√
    var ifynav = new Swiper('.ifymain .swiper-container',{
        direction: 'vertical',
        roundLengths : true,
        //loop: true,
        width: 90,
        //height: 44,
        slidesPerView: urmroIfy.slideLength - urmroIfy.slideGo,
        //slidesPerGroup : $('.swiper-slide').length,
        freeMode : true,
        //freeModeMomentum : false,
        onTouchEnd: function(swiper){
            //console.log(ifynav.getWrapperTranslate('y') + '----' + urmroIfy.slideGoY);
           // console.log(ifynav.getWrapperTranslate('y') < urmroIfy.slideGoY);
            //if(ifynav.getWrapperTranslate('y') < urmroIfy.slideGoY){
                //ifynav.setWrapperTranslate(urmroIfy.slideGoY);
                ifynav.slideTo(urmroIfy.slideGo, 500, false);
            //}
        },
        onTap: function(swiper){
            //if(swiper.clickedIndex <= urmroIfy.slideGo){
                ifynav.slideTo(swiper.clickedIndex, 500, false);
            //}
        }
    })

    //$('.swiper-wrapper').css({
    //    'transform': ' translate3d(0px, 0px, 0px)',
    //});

})()