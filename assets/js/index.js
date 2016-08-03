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

var responsive_fix = function () {
    if (document.getElementById("page1").offsetWidth <
        document.getElementById("page1").offsetHeight) {
        $('.page1').css({
            "min-height": "320px",
            "height": "auto",
            "max-height": "1080px"
        });
        $('.page3').css({
            "min-height": "320px",
            "height": "auto",
            "max-height": "1080px"
        });
        $('.maxcell-button').css({
            "margin-bottom": "50px"
        });
        $('#content-right').css({
            "margin-bottom": "50px"
        });
    }
};

var small_fix = function () {
    if (document.getElementById("page1").offsetHeight <= 320 &&
        document.getElementById("page1").offsetWidth <= 240) {
        document.getElementById("viewport").content =
            "width=240, height=320";
    }
    if (document.getElementById("page1").offsetWidth <= 240) {
        document.getElementById("viewport").content =
            "width=240, height=" + document.getElementById("page1").offsetHeight;
    }
    if (document.getElementById("page1").offsetHeight <= 320) {
        document.getElementById("viewport").content =
            "height=320, width=" + document.getElementById("page1").offsetWidth;
    }
};

var large_fix = function () {
    if (document.getElementById("page1").offsetWidth >= 1920 &&
        document.getElementById("page1").offsetHeight >= 1080) {
        document.getElementById("viewport").content = "height=1080, width=1920";
    }
    if (document.getElementById("page1").offsetWidth >= 1920) {
        document.getElementById("viewport").content =
            "width=1920, height=" + document.getElementById("page1").offsetHeight;
    }
    if (document.getElementById("page1").offsetHeight >= 1080) {
        document.getElementById("viewport").content =
            "height=1080, width=" + document.getElementById("page1").offsetWidth;
    }
};

$(document).ready(function () {
    $('body').responsive({
        extraSmall: function () {
            $('.nav-controls').removeClass('pull-right');
            small_fix();
            responsive_fix();
        },
        small: function () {
            $('.home').hide();
            small_fix();
            responsive_fix();
        },
        medium: function () {
            $('.home').show();
            small_fix();
            responsive_fix();
        },
        large: function () {
            small_fix();
            large_fix();
            responsive_fix();
        }
    });
});
