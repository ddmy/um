/**
 * Created by Administrator on 2016/7/15.
 */
(function(){

    var flag = true,
        order = true,
        allShop,sub,add,nums,pricein,select,totalin,totalinA,totalinAI,editor,totalok,cartnum;

    function getElm(){
        allShop = $('.shoping > ul > li').toArray();
        sub = $('.sub').toArray();
        add = $('.add').toArray();
        nums = $('.nums').toArray();
        pricein = $('.pricein span').toArray();
        select = $('.select i').toArray();
        totalin = $('.totalin span')[0];
        totalinA = $('.totalin a')[0];
        totalinAI = $('.totalin a i')[0];
        editor = $('.editor')[0];
        totalok = $('.totalok')[0];
        cartnum = $('.cartnum')[0];
    }

    getElm();

    //计算当前页面商品总价
    function countAll(){
        var prices = 0,
            allval = 0;
        //如果页面只有一个商品
        if(allShop.length == 1){

            if(allShop[0].everyAllPrice){

                prices = urmro.htmlToFixed($('.pricein span')[0],2);

            }else{

                prices = urmro.htmlToFixed($('.pricein span')[0],2) * nums[0].value;

            }

        }else{

            $('.pricein span').each(function(i,v){

                if(!$(allShop[i]).hasClass('gothis')){

                    if(allShop[i].everyAllPrice){

                        prices += urmro.htmlToFixed(v,2);

                    }else{

                        prices += urmro.htmlToFixed(v,2) * nums[i].value;

                        pricein[i].innerHTML = '￥' + (urmro.htmlToFixed(v,2) * nums[i].value).toFixed(2);

                    }
                }
            })


        }
        return Number(prices).toFixed(2);
    }

    $('.totalin span').html('合计：' + countAll());


    //给每个商品绑定单价，数量，总价属性
    function bound(){
        getElm();
        for(var i = 0; i < allShop.length; i += 1){
            //单价
            allShop[i].everyPrice = urmro.htmlToFixed($('.pricein span').toArray()[i],2) / nums[i].value;

            //console.log(allShop[i].everyPrice);
            //数量
            allShop[i].everyNum = $('.nums').eq(i).val();
            //总价
            allShop[i].everyAllPrice = allShop[i].everyPrice * allShop[i].everyNum;

            boundTouch(i,allShop[i]);
        }
    }

    bound();

    //计算商品总数量
    function allShopNum(flag){

        var cartnumval = flag ? Number(cartnum.innerHTML) || 0 : 0;

        if(!flag){

            $('.nums').each(function(i,v){

                cartnumval += Number(v.value);

            })

        }
        if(cartnumval > 0){

            cartnum.innerHTML = cartnumval;

        }
    }

    allShopNum(true);
    //绑定点击加减输入事件
    function boundTouch(i,v){
        touch.on(sub[i],'tap',function(){
            nums[i].value == 0 ? 0 : nums[i].value--;
            allShopNum();
            clickCioount(i);
        })
        touch.on(add[i],'tap',function(){
            nums[i].value ++;
            allShopNum();
            clickCioount(i);
        })
        nums[i].addEventListener('blur',function(){
            allShopNum();
            clickCioount(i);
        });
        //选中
        touch.on(select[i],'tap',function(){
            $(this).toggleClass('current');
            $(allShop[i]).toggleClass('gothis');
            if(order){
                totalin.innerHTML = '合计：' + countAll();
            }
        })
    }

    //输入点击后计算价格
    function clickCioount(i){
        allShop[i].everyNum = nums[i].value;
        allShop[i].everyAllPrice = nums[i].value * allShop[i].everyPrice;
        pricein[i].innerHTML = '￥ ' + (nums[i].value * allShop[i].everyPrice).toFixed(2);
        if(order){
            totalin.innerHTML = '合计：' + countAll();
        }
    }

    touch.on(totalinA,'tap',function(){
        if(flag){
            totalinAI.className = 'current';
            $(select).addClass('current');
            $(allShop).addClass('gothis');
            if(order){
                totalin.innerHTML = '合计：0';
            }
        }else{
            $(select).removeClass('current');
            $(allShop).removeClass('gothis');
            totalinAI.className = '';
            if(order){
                totalin.innerHTML = '合计：' + countAll();
            }
        }

        flag = !flag;
    })

    touch.on(editor,'tap',function(){
        if(order == false){
            $(select).removeClass('current');
            $(allShop).removeClass('gothis');
            totalinAI.className = '';
            editor.innerHTML = '编辑';
            totalin.innerHTML = '合计：' + countAll();
            totalok.innerHTML = '结算';
            order = true;
        }else{
            totalinAI.className = 'current';
            $(select).addClass('current');
            $(allShop).addClass('gothis');
            editor.innerHTML = '完成';
            totalin.innerHTML = '全选';
            totalok.innerHTML = '删除';
            order = false;
        }
    })

    touch.on(totalok,'tap',function(){
        if(order){
            if(!begin()){
                alert('不允许选中商品但数量为0');
            }else if(countAll() == 0){
                alert('请选择商品再下单');
            }else{
                submitOrder();
            }
        }else{
            for(var j = 0; j < allShop.length; j += 1){
                if(!$(allShop[j]).hasClass('gothis')){
                    $(allShop[j]).remove();
                }
            }
            shopRemove();
        }
    })

    //判断订单能否提交
    function begin(){
        var flag = true;
        for(var n = 0; n < allShop.length; n += 1){
            if(allShop[n].className == '' && nums[n].value < 1){
                flag = false;
                break;
            }
        }
        return flag;
    }

    //提交订单
    function submitOrder(){
        //提交订单
        //提交订单
        //提交订单
        //提交订单
        //提交订单
        alert('订单提交成功，总价：'+ countAll());
        var shopJson = {};
        allShop.forEach(function(v,i){
            if(v.className != 'gothis'){
                shopJson[ $(v).attr('data-id')] = $(v).find('.nums').val();
            }
        })
        shopJson = JSON.stringify(shopJson);
        console.log(shopJson);
        window.location.href = "../user/textOrder.html";
    }


    function shopRemove(){

        //删除商品

        alert('删除');
    }

})()

