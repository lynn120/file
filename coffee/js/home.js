/**
 * Created by admin on 2017/4/24.
 */
/**
 * Created by liujingjing on 2017/4/22.
 */
var wid = $(".picture img").width();
var num = 0;
function qwer() {
    var timeer = setInterval(function () {
        num++;
        if(num>2){
            num = 0;
        }
        $(".picture").animate({
            left:-wid*num
        },500);
        $(".circle div").removeClass("active");
        $(".circle div").eq(num).addClass("active");
    },2000);
    $("div").on("mouseover",function () {
        clearInterval(timeer);
    });
}
$("div").on("mouseout",function () {
    qwer();
});
$(".circle div").on("click",function () {
    num = $(this).index();
    $(".picture").animate({
        left:- num*wid
    },500);
    $(".circle div").removeClass("active");
    $(".circle div").eq(num).addClass("active");
});
qwer();
// 轮播结束
$(function () {
    $('.news div').on('click',function () {
        $('.news div').removeClass('active');
        $(this).addClass('active');
    });
});
