$(document).ready(function(){
    immediatelyConsult()

    function immediatelyConsult() {
        $('.immediately_consult').on('click', function(event) {
            event.preventDefault();
            $('#code').css({display: 'block'});
            $('#goodcover').css({display: 'block'});
            $('#code').children().find('.content_consult').css({display: 'block'});
            $('#code').children().find('.content_wechat').css({display: 'none'});
            $('#code').fadeIn();
        })
        $('.wechat_com').on('click', function(event) {
            console.log('wechat_com-click');
            event.preventDefault();
            $('#code').css({display: 'block'});
            $('#goodcover').css({display: 'block'});
            $('#code').children().find('.content_consult').css({display: 'none'});
            $('#code').children().find('.content_wechat').css({display: 'block'});
        })
        $('.close').on('click', function() {
            console.log('closebt-click');
            $('#code').css({display: 'none'});
            $('#goodcover').css({display: 'none'});
        });
        // $('#goodcover').on('click', function(event) {
        //     console.log('goodcover-click');
        //     event.preventDefault();
        //     $('#code').css({display: 'none'});
        //     $('#goodcover').css({display: 'none'});
        // });
        
    }
});


