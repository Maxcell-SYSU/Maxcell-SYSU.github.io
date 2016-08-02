/**
 * Created by alcanderian on 02/08/2016.
 */

document.getElementById("brand").onclick = function () {
    $("html,body").animate({scrollTop:$("#page1").offset().top},500);
};

document.getElementById("home").onclick = function () {
    $("html,body").animate({scrollTop:$("#page1").offset().top},500);
};

document.getElementById("about").onclick = function () {
    $("html,body").animate({scrollTop:$("#page2").offset().top},500);
};

document.getElementById("contact").onclick = function () {
    $("html,body").animate({scrollTop:$("#page3").offset().top},500);
};

document.getElementById("tobbs").onclick = function () {
    location.href = "https://omegago.pw";
};