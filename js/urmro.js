/**
 * Created by mydre on 2016/7/8.
 */

var urmro = {};
urmro = (function () {
    urmro.mobile = false;
    urmro.userAgentInfo = navigator.userAgent;
    urmro.Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    urmro.historyBack = document.querySelector('.login-back') || null;


    //禁止页面选中操作
    document.body.onselectstart = document.body.oncontextmenu = function () {
        return false;
    }
    //非移动端浏览处理函数
    urmro.notMobile = function () {
        var div = document.createElement('div');
        div.innerHTML = '您的浏览器不支持，请您在移动端浏览。';
        div.className = 'notmobile';
        document.body.appendChild(div);
    };

    //检测是否为移动端
    for (var i = 0; i < urmro.Agents.length; i += 1) {
        if (urmro.userAgentInfo.indexOf(urmro.Agents[i]) > 0) {
            urmro.mobile = true;
            break;
        }
    }
    if (!urmro.mobile) {
        window.location.href = 'http://www.urmro.com';
    }

    //页面后退
    if(urmro.historyBack){
        urmro.historyBack.addEventListener('click',function(){
            history.back(-1);
        })
    }
    return urmro;
})();