/**
 * Created by alcanderian on 02/08/2016.
 */

document.getElementById("brand").onclick = function () {
    $("html,body").animate({scrollTop: $("#page1").offset().top}, 500);
};

document.getElementById("home").onclick = function () {
    $("html,body").animate({scrollTop: $("#page1").offset().top}, 500);
};

document.getElementById("about").onclick = function () {
    $("html,body").animate({scrollTop: $("#page2").offset().top}, 500);
};

document.getElementById("contact").onclick = function () {
    $("html,body").animate({scrollTop: $("#page3").offset().top}, 500);
};

document.getElementById("tobbs").onclick = function () {
    alert("BBS 即将上线，敬请期待！请为我们的程序猿续一秒！");
    /* location.href = "https://omegago.pw"; */
};

$(document).ready(function () {
    $('body').responsive({
        extraSmall: function () {
            $('.nav-controls').removeClass('pull-right');
        },
        small: function () {
            $('.home').hide();
        },
        medium: function () {
            $('.home').show();
        },
        large: function () {
        }
    });
});
