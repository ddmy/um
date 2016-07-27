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
    //大小图切换
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

    //回到顶部
    touch.on(urmroList.elemGoTop,'tap',function(){
        document.body.scrollTop = 0;
    })

    //gotop显示
    urmroList.scrollTop = function(){
      if(document.body.scrollTop > window.screen.availHeight){
          urmroList.elemGoTop.style.display = 'block';
      }else{
          urmroList.elemGoTop.style.display = 'none';
      }
    };

    //绑定gotop事件
    urmroList.goTop = function(){
        touch.on(document,'swiping',function(){
            urmroList.scrollTop();
        })
    };

    //绑定添加购物车事件
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
    //是否绑定
    if(urmroList.windowHeight){
        urmroList.goTop();
    }
    if(urmroList.cart){
        urmroList.addCart();
    }
})()