$("#postcode").on("keydown", function () {
    var key = event.keyCode || event.charCode;
    if (key == 8 || key == 46) {
        if ($(this).val().length == 4) {
            $(this).val($(this).val().slice(0, -1));
        }
    } else {
        if ($(this).val().length == 2 && key != 189) {
            $(this).val($(this).val() + '-');
        }
    }
});