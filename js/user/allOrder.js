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
                throw("δ��ȷ���ػ�֧�ָ�����");
        }
    })
})

$(function(){
    leftSwipe();
    function leftSwipe(event){
        /*
         * 1.Ҫ��ֱ����Ļ���
         * 2.��������һ���ľ��뻬������
         * 3.��������λ�ӳ����� ��С���������Ķ�λ��Χ��ʱ��  ������ȥ
         * 4.���li��ʱ��ı䵱ǰ��Ԫ�ص���ʽ
         * 5.������Ҫ��������Ļ�Ķ���λ��
         * 6.���ײ����׵�ʱ�򻬶�����
         * */

        /*��ȡ������*/
        var parentDom = document.querySelectorAll('.ordertop');

        for(var n = 0; n < parentDom.length; n += 1){

            if(parentDom[n].querySelector('.scroll')){

                swiperAction(parentDom[n].querySelector('.scroll'),parentDom[n])
            }

        }

        function swiperAction(v,p){
            var childDom = v,
                parentDom = p;

            /*��ȡ�Ӻ���*/
            childDom = parentDom.querySelector('.scroll');


            /*�����ӵĸ߶�*/
            var parentH = $(parentDom).width();
            /*�ֺ��ӵĸ߶�*/
            var childH = $(childDom).width();


            /*��ȡ��λ������*/
            var minPosition = parentH-childH;
            var maxPosition = 0;

            console.log($(childDom).width());
            /*�����ľ���*/
            var distance = 100;
            /*��ȡ������ʱ��λ����*/
            var minSwipe = minPosition - distance;
            var maxSwipe = maxPosition + distance;

            /*�ᴩ�����  ��ǰ��λ*/
            var currY = 0;

            var startY = 0;/*��ʼY����*/
            var moveY = 0;/*����Y������*/
            var distanceY = 0;/*�ı�ľ���*/

            /*�ӹ���*/
            var addTransition = function(){
                childDom.style.webkitTransition = 'all 0.2s';/*����*/
                childDom.style.transition = 'all 0.2s';
            };
            /*ɾ������*/
            var removeTransition = function(){
                childDom.style.webkitTransition = 'none';/*����*/
                childDom.style.transition = 'none';
            };
            /*��λ*/
            /*��ǰ�Ķ�λ*/
            var setTranslateY = function(y){
                childDom.style.webkitTransform = 'translateX('+y+'px)';/*����*/
                childDom.style.transform = 'translateX('+y+'px)';
            };

            childDom.addEventListener('touchstart',function(e){
                startY = e.touches[0].clientX;
                e.preventDefault();

            });
            childDom.addEventListener('touchmove',function(e){
                moveY = e.touches[0].clientX;
                distanceY = moveY - startY;/*�ı�ľ���*/

                removeTransition();

                /*
                 * ����ʹ�ý�Ҫ��λ��λ�������ж�
                 * ������Ҫ��λ��λ����  ������С����������  ��������
                 * */
                if((currY+distanceY) > minSwipe && (currY+distanceY) < maxSwipe){
                    setTranslateY(currY+distanceY);
                }

            });
            window.addEventListener('touchend',function(e){
                /*���ն�λ*/
                /*�������λ��ʱ��*/
                if((currY+distanceY) > maxPosition){
                    currY = maxPosition;
                    addTransition();
                    setTranslateY(currY);
                }

                /*С����С��λ��ʱ��*/
                else if((currY+distanceY) < minPosition){
                    currY = minPosition;
                    addTransition();
                    setTranslateY(currY);
                }else{
                    /*��¼��ǰ�Ķ�λ*/
                    currY = currY +distanceY;
                }
                /*���ò���*/
                startY = 0;
                moveY = 0;
                distanceY = 0;
            });

        }
    }

})
