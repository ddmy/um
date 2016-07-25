/**
 * Created by Administrator on 2016/7/18.
 */

$('.master').width($('.text > div').width());
$('select').width($('.text > div').width());


$('select').each(function(i,v){
    v.onchange = function(){
        $('.master').eq(i).html($(v).find("option:selected").text());
    }
})

function selectDiv(){
    $('select').each(function(i,v){
        $('.master').eq(i).html($(v).find("option:selected").text());
    })
}

selectDiv();