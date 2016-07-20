/**
 * Created by mydre on 2016/7/8.
 */



//将对象转换为数组
urmro.goArray = function(arr){
    var newarr = [];
    if(arr instanceof Array){
        newarr = arr;
    }else if(arr.length > 1){
        for(var i = 0; i < arr.length; i += 1){
            newarr.push(arr[i]);
        }
    }else if(!arr.length){
        newarr.push(arr);
    }
    return newarr;
}

//盒子指定属性;
urmro.toggleBox = function(box,attr,state){
    if(box instanceof Array){
        box.forEach(function(v,i){
            v.style[attr] = state;
        })
    }else{
        [].forEach.call(box,function(v,i){
            v.style[attr] = state;
        })

    }
    return box;
};


//提取盒子内所有数字并链接，精确到小数点后指定位数，默认0
urmro.htmlToFixed = function(obj,num){
    var num = num || 0,
        html = obj.innerHTML,
        tempTwo = '';
    [].forEach.call(html,function(v,i){
        if(/[0-9\.]/ig.exec(v)){
            tempTwo += /[0-9\.]/ig.exec(v)[0];
        }
    })

    return Number(Number(tempTwo).toFixed(num));
}


//删除一组盒子内指定index的盒子
urmro.removeBox = function(obj,index){
    obj = urmro.goArray(obj);
    index = urmro.goArray(index);
    if(obj.length == 1){
        obj.parentNode.removeChild(obj);
    }else{
        obj.forEach(function(v,i){
            var that = v,
                eq = i;
            index.forEach(function(v,i){
                if(eq == v){
                    that.parentNode.removeChild(that);
                }
            })
        })
    }

}


//一个控制器控制全部节点切换两种状态
//传入一个对象
//对象四个属性
//elm 所有要控制的节点数组，伪数组
//control 控制器
//flag 记录两个状态 值为  true  或者 false
//controlName 两种状态各自要赋的值(暂定为切换类名)
urmro.allClass = function(obj){
    var elm = urmro.goArray(obj.elm),
        control = obj.control || undefined,
        flag = obj.flag,
        controlName = {
            0 : obj.controlName[0],
            1 : obj.controlName[1]
        },
        elmLength = elm.length;
    if(flag == true){
        for(var i = 0; i < elmLength; i += 1){
            elm[i].className = controlName[1];
        }
    }else{
        for(var i = 0; i < elmLength; i += 1){
            elm[i].className = controlName[0];
        }
    }
}
