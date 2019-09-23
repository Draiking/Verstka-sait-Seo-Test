$(document).ready(function() {


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
   })

});
