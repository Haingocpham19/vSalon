$(document).ready(function(){

    $('.content:first').show();
    $('.feature-header li:first').addClass('active');

    $('.feature-header li').click(function(){
        index = $(this).index();
        $('.feature-header li').removeClass('active');
        $(this).addClass('active');
        $('.content').hide();
        $('.content').eq(index).show();
    })
});