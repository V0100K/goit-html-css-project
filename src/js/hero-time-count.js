//TIME COUNT IN HERO

$('.representations-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: Number($(this).attr("data-duration")),
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});






