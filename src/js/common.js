$(document).ready(function() {


    $(".toggle-menu").click(function () {
        $(this).toggleClass("on");
        $(".menu").toggleClass('d-block');
    });

    $('.input-name').focus(function () {
        $(this).addClass('active-input')
    });
    $('.input-name').blur(function () {
        $(this).removeClass('active-input')
    });



    $('.open-windows').mouseover(function (event) {
        var id = event.target.id;
        if(id) {
            var targerID = id.replace(/text-/, '');
            $('#'+ targerID).addClass('active-window')
        }
    });

   $('.details').mouseleave(function () {
       $(this).removeClass('active-window')
   });

    $('.slider-work').slick({
        infinity: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrow:true,
        prevArrow:"<div class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
        nextArrow:"<div class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></div>"
    });

});
