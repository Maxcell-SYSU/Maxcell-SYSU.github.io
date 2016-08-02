/**
 * Created by alcanderian on 02/08/2016.
 */

document.getElementById("brand").onclick = function () {
    var now_scroll = document.body.scrollTop;
    var px_pre_move = now_scroll / 20;
    var funScroll = function () {
        var top = document.body.scrollTop;
        if (top > 0) {
            top -= px_pre_move;
            if (top <= 0) top = 0;
        } else return;
        document.body.scrollTop = top;
        requestAnimationFrame(funScroll);
    };
    if (now_scroll) funScroll();
};

document.getElementById("home").onclick = function () {
    var now_scroll = document.body.scrollTop;
    var px_pre_move = now_scroll / 20;
    var funScroll = function () {
        var top = document.body.scrollTop;
        if (top > 0) {
            top -= px_pre_move;
            if (top <= 0) top = 0;
        } else return;
        document.body.scrollTop = top;
        requestAnimationFrame(funScroll);
    };
    if (now_scroll) funScroll();
};

document.getElementById("about").onclick = function () {
    if (document.body.scrollTop === 0) document.body.scrollTop = 1;
    var desire_scroll = document.getElementById("page1").offsetHeight;
    if (document.body.scrollTop >= desire_scroll * 2) document.body.scrollTop = document.body.scrollTop - 5;
    var now_scroll = document.body.scrollTop;
    var px_pre_move = (now_scroll - desire_scroll) / 20;
    var funScroll = function () {
        var top = document.body.scrollTop;
        if (Math.abs(top - desire_scroll) > 1) {
            top -= px_pre_move;
            if (Math.abs(top - desire_scroll) < 5) top = desire_scroll;
        } else return;
        document.body.scrollTop = top;
        requestAnimationFrame(funScroll);
    };
    if (now_scroll) funScroll();
};

document.getElementById("contact").onclick = function () {
    if (document.body.scrollTop === 0) document.body.scrollTop = 1;
    var now_scroll = document.body.scrollTop;
    var desire_scroll = document.getElementById("page1").offsetHeight * 2;
    var px_pre_move = (desire_scroll - now_scroll) / 20;
    var funScroll = function () {
        var top = document.body.scrollTop;
        if (top < desire_scroll) {
            top += px_pre_move;
            if (top >= desire_scroll) top = desire_scroll;
        } else return;
        document.body.scrollTop = top;
        requestAnimationFrame(funScroll);
    };
    if (now_scroll) funScroll();
};

document.getElementById("tobbs").onclick = function () {
    location.href = "https://omegago.pw";
};