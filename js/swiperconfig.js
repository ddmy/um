/**
 * Created by mydre on 2016/7/8.
 */


    //Ê×Ò³bannerÅäÖÃ
var bannerSwiper = new Swiper('.swiper-container',{
    autoplay: 2000,
    loop: true,
    pagination: '.swiper-pagination',
    onAutoplay: function(){
        con();
    }
});
function con(){
    bannerSwiper.activeIndex = bannerSwiper.activeIndex > 5 ? 1 : bannerSwiper.activeIndex;
}



