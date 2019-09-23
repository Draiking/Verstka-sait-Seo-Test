$(document).ready(function() {


    $('.input-name').focus(function () {
        $(this).addClass('active-input')
    });
    $('.input-name').blur(function () {
        $(this).removeClass('active-input')
    });

    $('.input-phone').focus(function () {
        $(this).addClass('active-input')
    });
    $('.input-phone').blur(function () {
        $(this).removeClass('active-input')
    });

});
