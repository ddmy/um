/**
 * Created by mydre on 2016/7/8.
 */



//������ת��Ϊ����
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

//����ָ������;
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


//��ȡ�������������ֲ����ӣ���ȷ��С�����ָ��λ����Ĭ��0
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


//ɾ��һ�������ָ��index�ĺ���
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


//һ������������ȫ���ڵ��л�����״̬
//����һ������
//�����ĸ�����
//elm ����Ҫ���ƵĽڵ����飬α����
//control ������
//flag ��¼����״̬ ֵΪ  true  ���� false
//controlName ����״̬����Ҫ����ֵ(�ݶ�Ϊ�л�����)
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
