$(document).ready(function() {
    const $imgBtnList = $('.portfolio_content');
    function imgListBtn() {
        $imgBtnList.children().hover(
            function () {
                var index = $(this).index();
                array = index;
                imgBtnListInit(index)

            },
            function () {
                imgBtnListInit()

            });
    }

    function imgBtnListInit(index) {
        for (var i=0; i < $imgBtnList.children().length; i++ ) { 
            
            $imgBtnList.children().eq(i).find('.portfolio-content-overlay').stop().animate({bottom: "-240px",},400);
            $imgBtnList.children().eq(i).stop().animate({paddingTop: '80px'},400);
            $imgBtnList.children().eq(i).find('.portfolio-content_image').stop().animate({width: '290px', height: '340px'}, 400);
            
            if(i==index) {
                $imgBtnList.children().eq(i).find('.portfolio-content-overlay').stop().animate({bottom:"0"},400);
                $imgBtnList.children().eq(i).stop().animate({paddingTop: '50px'},400);
                $imgBtnList.children().eq(i).find('.portfolio-content_image').stop().animate({width: '320px', height: '370px'}, 400);
            }
        }
    }

    function setBMap() {
        // 百度地图API功能
        const map = new BMap.Map("allmap");
        const point = new BMap.Point(112.567326, 37.761132);
        map.centerAndZoom(point, 15);
        const opts = {
            width: 200,     // 信息窗口宽度
            height: 100,     // 信息窗口高度
            title: "山西开全科技", // 信息窗口标题
            enableMessage: true,//设置允许信息窗发送短息
            message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        };
        let infoWindow = new BMap.InfoWindow("地址：山西省太原市小店区嘉隆明城151号嘉龙明城2-3#商铺2楼", opts);  // 创建信息窗口对象

        const marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.openInfoWindow(infoWindow,point); //开启信息窗口
        marker.addEventListener("click", function() {
            map.openInfoWindow(infoWindow,point); //开启信息窗口
        });
    }
    setBMap();
    imgListBtn();
});
