// 滚动监听
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let left = document.querySelector('.header-left')
    let right = document.querySelector('.header-right-item')
    let change = document.querySelector('.header-inside')

    if (window.scrollY > 0) {
        header.classList.add('header-latter');
        left.classList.add('header-left-latter')
        right.classList.add('header-right-latter')
        change.classList.add('header-inside-latter')
    } else {
        header.classList.remove('header-latter');
        left.classList.remove('header-left-latter')
        right.classList.remove('header-right-latter')
        change.classList.remove('header-inside-latter')
    }

})

// window.addEventListener('scroll', function() {
//     let header = document.querySelector('.header');
//     if (window.scrollY > 0) {
//         // console.log('有阴影了');
//         header.classList.add('header-shadow')
//     } else {
//         header.classList.remove('header-shadow')
//     }
// })

var nav_side = document.getElementById('nav_side')
var mobile = document.getElementById('mobile')
var mobile_mask = document.getElementById('mobile_mask')

// var mobile_list = document.getElementById('mobile_list')
var state = 0
    // var color1 = "rgba(0,0,0,0.3)"
    // var color2 = "rgba(0,0,0,0)"
nav_side.addEventListener('click', function() {
    if (state === 0) {
        // test.style.display = 'block'
        // test.style.opacity = 1

        mobile.style.right = 0
        setTimeout(function() {
            mobile_mask.style.display = 'block'
        }, 100)

        state = 1
    } else {

        mobile.style.right = -218 + "px"
        mobile_mask.style.display = 'none'
        state = 0
    }

})
mobile_mask.addEventListener('click', function() {
    if (state === 1) {
        mobile.style.right = -218 + "px"
        mobile_mask.style.display = 'none'
        state = 0
    }
})


var doc_ele = document.documentElement

function get_width() {
    // var divWidth = document.getElementById("banner").offsetWidth;
    // if (divWidth > 768) {
    //     console.log("banner width: " + divWidth);
    //     banner.style.height = divWidth * (605 / 1920) + "px";
    // } else {
    //     console.log("banner width: " + divWidth);
    //     banner.style.height = divWidth * (1300 / 1920) + "px";
    // }
    let w = doc_ele.clientWidth
    console.log(w);
    if (w > 1266) {
        // pc大尺寸
        let size = 10 + 'px'
        doc_ele.style.fontSize = size
    } else if (w > 992) {
        // pc小尺寸
        let size = (10 * (w / 1266) > 40 ? 40 + "px" : (10 * (w / 1266) + "px"));
        doc_ele.style.fontSize = size
        console.log('pc 小');
    } else if (w > 768) {
        // ipad尺寸
        let size = (10 * (w / 992) > 40 ? 40 + "px" : (10 * (w / 1266) + "px"));
        doc_ele.style.fontSize = size
            // console.log("iPad");
    } else {
        // 移动端
        let size = (10 * (w / 768) > 40 ? 40 + "px" : (10 * (w / 1266) + "px"));
        doc_ele.style.fontSize = size
            // console.log("mobile");
    }

}
window.addEventListener('load', get_width);
window.addEventListener('resize', get_width)