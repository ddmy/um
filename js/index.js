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


    //优蚂快报跑马灯
    urmroIndex.news = $('.news-main ul');
    urmroIndex.newP = $('.news-main ul li');
    urmroIndex.newLiHeight = urmroIndex.newP.height();
    urmroIndex.newIndex = 0;
    urmroIndex.newLen = urmroIndex.newP.length;
    urmroIndex.newTimer = null;
    urmroIndex.newFirst = urmroIndex.newP.eq(0)[0].cloneNode(true);

    //无缝滚动前置
    urmroIndex.news[0].appendChild(urmroIndex.newFirst);

    urmroIndex.newTimer = setInterval(function(){

        urmroIndex.newIndex -= urmroIndex.newLiHeight;

        if(Math.abs(urmroIndex.newIndex) == urmroIndex.newLiHeight * (urmroIndex.newLen + 1)){

            urmroIndex.news.css('transition','none');

            urmroIndex.news.css('transform','translateY(0px)');

            setTimeout(function(){

                urmroIndex.news.css('transition','transform 0.5s');

            },0)

            urmroIndex.newIndex = 0;

        }else{

            urmroIndex.news.css('transform','translateY('+ urmroIndex.newIndex +'px)');

        }

    },2000);

})();
