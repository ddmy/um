/**
 * Created by Administrator on 2016/7/15.
 */

$(function(){

    var urmroAllOrder = {};
    urmroAllOrder.transX = 0;
    urmroAllOrder.allDown = true;

    $('.scroll').css('transform','translateX(0)');

    $('.scroll').each(function(i,v){
        $(v).width($('.scroll').eq(i).children('a').length * 110);
    })

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

$(function(){
    leftSwipe();
    function leftSwipe(event){
        /*
         * 1.要求垂直方向的滑动
         * 2.当滑动到一定的距离滑动不了
         * 3.当滑动的位子超过了 最小和最大允许的定位范围的时候  吸附回去
         * 4.点击li的时候改变当前的元素的样式
         * 5.并且需要滑动到屏幕的顶部位子
         * 6.当底部触底的时候滑动不了
         * */

        /*获取父盒子*/
        var parentDom = document.querySelectorAll('.ordertop');

        for(var n = 0; n < parentDom.length; n += 1){

            if(parentDom[n].querySelector('.scroll')){

                swiperAction(parentDom[n].querySelector('.scroll'),parentDom[n])
            }

        }

        function swiperAction(v,p){
            var childDom = v,
                parentDom = p;

            /*获取子盒子*/
            childDom = parentDom.querySelector('.scroll');


            /*父盒子的高度*/
            var parentH = $(parentDom).width();
            /*字盒子的高度*/
            var childH = $(childDom).width();


            /*获取定位的区间*/
            var minPosition = parentH-childH;
            var maxPosition = 0;

            console.log($(childDom).width());
            /*吸附的距离*/
            var distance = 100;
            /*获取滑动的时候定位区间*/
            var minSwipe = minPosition - distance;
            var maxSwipe = maxPosition + distance;

            /*贯穿程序的  当前定位*/
            var currY = 0;

            var startY = 0;/*开始Y坐标*/
            var moveY = 0;/*滑动Y的坐标*/
            var distanceY = 0;/*改变的距离*/

            /*加过渡*/
            var addTransition = function(){
                childDom.style.webkitTransition = 'all 0.2s';/*兼容*/
                childDom.style.transition = 'all 0.2s';
            };
            /*删除过渡*/
            var removeTransition = function(){
                childDom.style.webkitTransition = 'none';/*兼容*/
                childDom.style.transition = 'none';
            };
            /*定位*/
            /*当前的定位*/
            var setTranslateY = function(y){
                childDom.style.webkitTransform = 'translateX('+y+'px)';/*兼容*/
                childDom.style.transform = 'translateX('+y+'px)';
            };

            childDom.addEventListener('touchstart',function(e){
                startY = e.touches[0].clientX;
                e.preventDefault();

            });
            childDom.addEventListener('touchmove',function(e){
                moveY = e.touches[0].clientX;
                distanceY = moveY - startY;/*改变的距离*/

                removeTransition();

                /*
                 * 我们使用将要定位的位子来做判断
                 * 当现在要定位的位子在  最大和最小滑动区间内  才允许滑动
                 * */
                if((currY+distanceY) > minSwipe && (currY+distanceY) < maxSwipe){
                    setTranslateY(currY+distanceY);
                }

            });
            window.addEventListener('touchend',function(e){
                /*最终定位*/
                /*大于最大定位的时候*/
                if((currY+distanceY) > maxPosition){
                    currY = maxPosition;
                    addTransition();
                    setTranslateY(currY);
                }

                /*小于最小定位的时候*/
                else if((currY+distanceY) < minPosition){
                    currY = minPosition;
                    addTransition();
                    setTranslateY(currY);
                }else{
                    /*记录当前的定位*/
                    currY = currY +distanceY;
                }
                /*重置参数*/
                startY = 0;
                moveY = 0;
                distanceY = 0;
            });

        }
    }

})
