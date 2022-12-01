var btn = $('#top-a');

$(window).scroll(function () {
    if ($(window).scrollTop() > 850) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '250');
});
