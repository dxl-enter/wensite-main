$(document).ready(function () {
    const $imgBtnList = $('#slide ul')
    const $updateRecords = $('.update_records')
    const updateRecordsLength = $updateRecords.find(".wrapper_box").length;

    function imgListBtn() {

        for (let i = 0; i < updateRecordsLength; i++) {
            // $imgBtnList.append('<li style="display: none;">' + $updateRecords.children().eq(i).find('.title_date').val() + '</li>');
            $imgBtnList.append('<li style="display: none;">' + (i + 1) + '</li>');
        }

        // $imgBtnList.children().eq(0).addClass("current");

        // $imgBtnList.children().click(function(){
        //     var index=$(this).index();
        //     array=index;
        //     bannerImgList(index);
        //     $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");

        // });
    }
    imgListBtn();
    const $slideLi = $('#slide ul li');
    const $step = $('.wrapper_box');
    const stepLength = $step.length;
    $(window).scroll(function () {
        var index = 0;

        $step.each(function (i) {
            var a = $(this).offset().top - $(document).scrollTop();
            if (a < (42 + 32 * i)) {
                $slideLi.eq(i).show();
                index = i + 1;
            }
            else {
                $slideLi.eq(i).hide();
            }
        });
        $step.eq(index).addClass('on').parent().siblings().find('.main_step').removeClass('on');
        index && $slideLi.eq(index - 1).addClass('on').siblings().removeClass('on');
    });
    $slideLi.click(function () {
        var index = $(this).index();
        $('body,html').animate({
            scrollTop: $step.eq(index).offset().top
        }, 500);
    }).hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });
})