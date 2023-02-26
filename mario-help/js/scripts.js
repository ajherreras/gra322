$(document).ready(function () {
    $(".season").hover(function () {
        $(this).children("video")[0].play();
    }, function () {
        var el = $(this).children("video")[0];
        el.pause();
    });
});

