// function get_screen() {
//     // 获取当前设备的宽度
//     let w = document.documentElement.clientWidth;
//     // 计算得出合适的字体大小
//     let size = (20 * (w / 1266) > 40 ? 40 + "px" : (20 * (w / 1266) + "px"));
//     document.documentElement.style.fontSize = size;
// }
// window.addEventListener('load', get_screen);
// window.addEventListener('resize', get_screen);

var banner = document.getElementById("banner")

function get_width() {
    var divWidth = document.getElementById("banner").offsetWidth;
    if (divWidth > 768) {
        console.log("banner width: " + divWidth);
        banner.style.height = divWidth * (605 / 1920) + "px";
    } else {
        console.log("banner width: " + divWidth);
        banner.style.height = divWidth * (1300 / 1920) + "px";
    }

}
window.addEventListener('load', get_width);
window.addEventListener('resize', get_width)