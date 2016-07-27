/**
 * Created by Administrator on 2016/7/12.
 */

(function(){
    var urmroList = {};
    urmroList.shops = document.querySelectorAll('.shop li');
    urmroList.togglerList = document.querySelector('.list-login');
    urmroList.windowHeight = window.screen.availHeight || null;
    urmroList.elemGoTop = document.querySelector('.gotop');
    urmroList.cart = document.querySelectorAll('.main a i') || null;
    urmroList.cartnum = document.querySelector('.cartnum') || null;
    urmroList.cartNum = urmroList.cartnum.innerHTML || 0;
    //��Сͼ�л�
    touch.on(urmroList.togglerList,'tap',function(){
        if(urmroList.togglerList.className == 'list-login'){
            urmroList.togglerList.className = 'list-login list-login-true';
            [].forEach.call(urmroList.shops,function(v,i){
                v.className = 'box';
            })
        }else{
            urmroList.togglerList.className = 'list-login';
            [].forEach.call(urmroList.shops,function(v,i){
                v.className = '';
            })
        }
    })

    //�ص�����
    touch.on(urmroList.elemGoTop,'tap',function(){
        document.body.scrollTop = 0;
    })

    //gotop��ʾ
    urmroList.scrollTop = function(){
      if(document.body.scrollTop > window.screen.availHeight){
          urmroList.elemGoTop.style.display = 'block';
      }else{
          urmroList.elemGoTop.style.display = 'none';
      }
    };

    //��gotop�¼�
    urmroList.goTop = function(){
        touch.on(document,'swiping',function(){
            urmroList.scrollTop();
        })
    };

    //����ӹ��ﳵ�¼�
    urmroList.addCart = function(){
        [].forEach.call(urmroList.cart,function(v,i){
            touch.on(v,'tap',function(){
                var that = v,
                    flag = true;
                if(flag){
                    that.className = 'add';
                    flag = false;
                    urmroList.cartnum.innerHTML = ++ urmroList.cartNum;
                    setTimeout(function(){
                        that.className = '';
                        flag = true;
                    },1100);
                }
            })
        })
    }
    //�Ƿ��
    if(urmroList.windowHeight){
        urmroList.goTop();
    }
    if(urmroList.cart){
        urmroList.addCart();
    }
})()