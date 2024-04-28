$(document).ready(function(){
    "use strict";
    $('.raising-nav').click(function() {
        $('.raising-nav').css({display: 'none'})
        $('.navbar-toggle').attr('src', './imgs/index/nav.png')
    })
    $('.navbar-toggle').click(function() {
        const navbarImg =  $('.navbar-toggle').attr('src')
        if(navbarImg.indexOf('close') !== -1) {
            $('.navbar-toggle').attr('src', './imgs/index/nav.png')
            $('.raising-nav').css({display: 'none'})
        } else {
            $('.navbar-toggle').attr('src', './imgs/index/close.png')
            $('.raising-nav').css({display: 'block'})
        }
        
    })
    $(".raising-menu a").each(function() {
        const $this = $(this);//获取
        console.log($this[0].href, String(window.location));
        
        if($this[0].href==String(window.location)){
            $this.parent().addClass("current");
            $this.parent().css({background: 'rgba(0, 144, 217, 0.1)'})
            $this.css({color: 'rgba(0, 144, 217, 1)',fontFamily: "PingFangSC-Semibold"});
        } else {
            $this.parent().removeClass("current");
            $this.parent().css({background: 'rgba(255, 255, 255, 1)'})
            $this.css({color: 'rgba(15, 25, 31, 1)'});
        }
    })
})
