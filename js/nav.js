$(document).ready(function(){
    "use strict";
    $(".raising-menu a").each(function() {
        
        const $this = $(this);//获取
        if($this[0].href==String(window.location)){
            $this.parent().addClass("current");
            $this.css({color: 'rgba(15, 25, 31, 1)'});
        } else {
            $this.parent().removeClass("current");
            $this.css({color: 'rgba(15, 25, 31, 0.65)'});
        }
    })
})
