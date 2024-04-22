

/*====================
 bannerList======>jsList-function
 =====================*/

function bannerListFn(a, b, c, d, e, f, width) {
    var $bannerMaxWapDom = a;
    var windowWidth = width;
    var timeShow = 0;
    var array = 0;
    var timeOff = 0;

    var imgPos = $bannerMaxWapDom.find("ul").find("li");

    var cloneOne = imgPos.first().clone();
    $bannerMaxWapDom.find("ul").append(cloneOne);
    $bannerMaxWapDom.find("li").width(windowWidth);
    var liWidth = imgPos.width();
    var liLength = $bannerMaxWapDom.find("li").length;
    $bannerMaxWapDom.find("ul").width(liWidth * (liLength + 1));

    var $imgBtnList = b;

    setTimeout(function (i) {
        timeShow++;
        (timeShow == 1) ? $bannerMaxWapDom.find("ul").fadeIn() : $bannerMaxWapDom.find("ul").hide();
    }, 20);

    (e === undefined) ? e = 2000 : e = e;

    function imgListBtn() {
        imgBtnListInit(0)
        $imgBtnList.children().click(function () {
            var index = $(this).index();
            array = index;
            bannerImgList(index);
            imgBtnListInit(index)

        });

    }
    function imgBtnListInit(index) {
        for (var i=0; i < $imgBtnList.children().length; i++ ) { 
            
            $imgBtnList.children().eq(i).find('.wrapper_box_dot').removeClass('display_inline-block')
            $imgBtnList.children().eq(i).find('.title_date').removeClass('title_date_color')
            $imgBtnList.children().eq(i).find('.context_paragraph').removeClass('context_paragraph_color')
            $imgBtnList.closest('.history_back').removeClass('history_back' + (i + 1))
            $imgBtnList.closest('.history_back').find('.p5_image').children().eq(i).addClass('display_none')
            if(i==index) {
                $imgBtnList.children().eq(i).find('.wrapper_box_dot').addClass('display_inline-block')
                $imgBtnList.children().eq(i).find('.title_date').addClass('title_date_color')
                $imgBtnList.children().eq(i).find('.context_paragraph').addClass('context_paragraph_color')
                $imgBtnList.closest('.history_back').addClass('history_back' + (i + 1))
                $imgBtnList.closest('.history_back').find('.p5_image').children().eq(i).removeClass('display_none')
            }
        }
    }

    imgListBtn();

    function bannerImgList(a) {
        $bannerMaxWapDom.find("ul").animate({ left: -a * windowWidth }, 400)
    }

    function setTime() {
        timeOff = setInterval(function () {
            array++;
            move();
        }, e)
    }

    (f) ? setTime() : setTime;

    c.stop(true).click(function () {
        array--;
        move();
    });

    d.stop(true).click(function () {
        array++;
        move();
    });

    function move() {

        if (array == liLength) {
            $bannerMaxWapDom.find("ul").css({ left: 0 });
            array = 1;
        }

        if (array == -1) {
            $bannerMaxWapDom.find("ul").css({ left: -liWidth * (liLength - 1) });
            array = liLength - 2
        }

        $bannerMaxWapDom.find("ul").stop(true).animate({
            left: -array * liWidth
        }, 800);

        (array == liLength - 1) ? 
        imgBtnListInit(0) : 
        imgBtnListInit(array);


    }

    $bannerMaxWapDom.hover(function () {
        clearInterval(timeOff);
    }, function () { (f) ? setTime() : setTime; });
}























