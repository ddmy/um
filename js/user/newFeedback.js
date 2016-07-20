/**
 * Created by Administrator on 2016/7/17.
 */

(function () {

    var flagInp = false,
        flagText = false;

    function testRequest(){
        if(flagInp && flagText){
            $('.newrequest').addClass('current');
        }else{
            $('.newrequest').removeClass('current');
        }
    }

    $('.newfeedbacktitle input').blur(function () {
        if ($(this).val().length > 3 && $(this).val().length < 9) {
            flagInp = true;
        } else {
            flagInp = false;
        }
        testRequest();
    })

    $('.newfeedbacktext textarea').blur(function () {
        if ($(this).val().length > 14) {
            flagText = true;
        } else {
            flagText = false;
        }
        testRequest();
    })

    touch.on($('.newrequest a'), 'tap', function () {
        if (!(flagInp && flagText)) {
            alert('Çë¼ì²é×ÖÊýàÞ');
        } else {
            window.location.href = "../index.html";
        }
    })
})()