$(document).ready(function(){
    $('.menu-mobile').on('click', function(){
        $('.menu-menu-mobile').toggleClass('active');
        $('.menu-mobile').find('i').toggleClass('fa-x');

    });

});
