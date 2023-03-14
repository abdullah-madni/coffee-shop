$(document).ready(function(){
    $('.mynavbar-toggler').click(function(){
        $(this).find('i.fa-solid').toggleClass('fa-bars');
        $(this).find('i.fa-solid').toggleClass('fa-xmark');
        if($('#mynavbar .navlist').css('display') == 'none'){
            // $('#mynavbar .navlist').css('display', 'flex');
            $('#mynavbar .navlist').slideDown();
        } else {
            $('#mynavbar .navlist').slideUp();
            // $('#mynavbar .navlist').css('display', 'none');
        }
    });


    window.onresize = function() {
        if (window.innerWidth > 575) { 
            $('#mynavbar .navlist').css('display', 'flex');
        }
    }
});