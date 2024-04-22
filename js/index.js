$(document).ready(function () {
    console.log('$(.p7_content).children().eq(1)=====', $('.p7_content').children().eq(1));

    /*=======================
        调用方法：
        传递参数方法如下：
        对象1：banner最大容器====================必填
        对象2：banner======>按钮父容器============必填
        对象3，4：banner====>左右按钮对象名===========必填
        对象5：banner滚动时间==================>可选项=======>默认为2000
        对象6：是否需要自动轮播需要==========true============不需要false:必填
        =============================*/
    bannerListFn(
        $(".p6_banner"),
        $(".img-btn-list"),
        $(""),
        $(""),
        4000,
        true,
        868
    );
    bannerListFn(
        $(".p8_banner"),
        $(""),
        $(".p8_banner_left"),
        $(".p8_banner_right"),
        4000,
        true,
        960
    );
});
