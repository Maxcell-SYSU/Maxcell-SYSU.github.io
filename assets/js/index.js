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
        },
        small: function () {
            $('.home').hide();
            if (document.getElementById("page1").offsetWidth <= 240) {
                document.getElementById("viewport").content =
                    "width=240, height=" + document.getElementById("page1").offsetHeight;
            }
            if (document.getElementById("page1").offsetHeight <= 320) {
                document.getElementById("viewport").content =
                    "height=320, width=" + document.getElementById("page1").offsetWidth;
            }
        },
        medium: function () {
            $('.home').show();
            if (document.getElementById("page1").offsetWidth <= 240) {
                document.getElementById("viewport").content =
                    "width=240, height=" + document.getElementById("page1").offsetHeight;
            }
            if (document.getElementById("page1").offsetHeight <= 320) {
                document.getElementById("viewport").content =
                    "height=320, width=" + document.getElementById("page1").offsetWidth;
            }
        },
        large: function () {
            if (document.getElementById("page1").offsetWidth <= 240) {
                document.getElementById("viewport").content =
                    "width=240, height=" + document.getElementById("page1").offsetHeight;
            }
            if (document.getElementById("page1").offsetHeight <= 320) {
                document.getElementById("viewport").content =
                    "height=320, width=" + document.getElementById("page1").offsetWidth;
            }
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
        }
    });
});
