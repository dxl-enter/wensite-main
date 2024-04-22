$(document).ready(function(){
    $.ajax({
        url: "nav.html",
        type: "GET",
        success: function(data) {
            $("#nav-placeholder").html(data);
        }
    });
    $.ajax({
        url: "footer.html",
        type: "GET",
        success: function(data) {
            $("#footer-placeholder").html(data);
        }
    });
    $.ajax({
        url: "notification.html",
        type: "GET",
        success: function(data) {
            $("#notification-placeholder").html(data);
        }
    })
    initWOW()
    immediatelyConsult()
    /*
     * 1920代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;
     * 100代表换算比例，这里写100是 为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等
     */
    // getRem(1920, 100);
    // $(window).resize(function() {
    //     getRem(1920, 100);
    // });
    function initWOW() {
        new WOW().init();
    }
    function immediatelyConsult() {
        $('.immediately_consult').on('click', function() {
            $('#code').css({display: 'block'});
            $('#goodcover').css({display: 'block'});
            $('#code').children().find('.content_consult').css({display: 'block'});
            $('#code').children().find('.content_wechat').css({display: 'none'});
            $('#code').fadeIn();
        })
    }
    function getRem(pwidth, prem) {

        const oWidth = document.body.clientWidth || document.documentElement.clientWidth;

        let fontSize = oWidth / pwidth * prem || 16;
        // 判斷屏幕大小，如果小於 1200px，則將 font-size 設定為 100%，避免在手機上跑版
        if (oWidth < 1200) {
            fontSize = 100;
        }
        $('html').css('font-size', fontSize + 'px');

    }
});


