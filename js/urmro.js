/**
 * Created by mydre on 2016/7/8.
 */

var urmro = {};
urmro = (function () {
    urmro.mobile = false;
    urmro.userAgentInfo = navigator.userAgent;
    urmro.Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    urmro.historyBack = document.querySelector('.login-back') || null;


    //��ֹҳ��ѡ�в���
    document.body.onselectstart = document.body.oncontextmenu = function () {
        return false;
    }
    //���ƶ������������
    urmro.notMobile = function () {
        var div = document.createElement('div');
        div.innerHTML = '�����������֧�֣��������ƶ��������';
        div.className = 'notmobile';
        document.body.appendChild(div);
    };

    //����Ƿ�Ϊ�ƶ���
    for (var i = 0; i < urmro.Agents.length; i += 1) {
        if (urmro.userAgentInfo.indexOf(urmro.Agents[i]) > 0) {
            urmro.mobile = true;
            break;
        }
    }
    if (!urmro.mobile) {
        window.location.href = 'http://www.urmro.com';
    }

    //ҳ�����
    if(urmro.historyBack){
        urmro.historyBack.addEventListener('click',function(){
            history.back(-1);
        })
    }
    return urmro;
})();