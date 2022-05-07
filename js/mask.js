// var inside_item = document.getElementById('inside_item')
// var inside_item2 = document.getElementById('inside_item2')
var mask = document.getElementsByClassName('mask')
var img = document.getElementsByClassName('inside-item')


// for (var k = 0; k < 6; k++) {

//     // console.log(typeof(k));
//     // console.log(typeof(img[k]))

//     img[k].addEventListener('mouseover', function(k) {
//             mask = this.mask
//                 // this.mask.classList.add('mask-latter')
//             mask.classList.add('mask-latter')
//                 // img[k].classList.add('inside-item-latter')
//             this.classList.add('inside-item-latter')
//             console.log(mask[k]);
//             console.log(img[k]);
//         })
//         // mask[k].addEventListener('mouseover', function(k) {
//         //     this.classList.add('mask-latter')
//         //         // img[k].classList.add('inside-item-latter')
//         //         // this.classList.add('inside-item-latter')
//         // })
//     img[k].addEventListener('mouseout', function(k) {
//         // mask[i].classList.remove('mask-latter')
//         this.classList.remove('inside-item-latter')
//     })

// }

// for (var k = 0; k < 6; k++) {




//     mask[k].addEventListener('mouseover', function(k) {
//             // this.mask.classList.add('mask-latter')
//             // mask[k].classList.add('mask-latter')
//             // img[k].classList.add('inside-item-latter')
//             this.classList.add('mask-latter')
//         })
//         // mask[k].addEventListener('mouseover', function(k) {
//         //     this.classList.add('mask-latter')
//         //         // img[k].classList.add('inside-item-latter')
//         //         // this.classList.add('inside-item-latter')
//         // })
//     mask[k].addEventListener('mouseout', function(k) {
//         // mask[i].classList.remove('mask-latter')
//         this.classList.remove('mask-latter')
//     })

// }



// var x = 0
// console.log(typeof(x));
// img[String(x)].addEventListener('mouseover', add(String(x)))
// img[x].addEventListener('mouseout', remove(x))

// img.forEach(function(i) {
//     img[i].addEventListener('mouseover', add(i))
//     img[i].addEventListener('mouseout', remove(i))
// });
// var x = 0
// console.log(img[x])
// laji = [1, 2, 3]
// laji.forEach(function(i) {
//     console.log(i)
// })
// console.log(typeof(laji[x]))
// console.log(img[0].addEventListener('mouseover', add(0)));


// var ps = document.getElementsByTagName("p");
// for (var i = 0; i < ps.length; i++) {
//     ps[i].addEventListener("click", (function(num) {
//         return function() {
//             alert(num);
//         };
//     })(num));
// }



img[0].addEventListener('mouseover', function() {
    mask[0].classList.add('mask-latter')
    img[0].classList.add('inside-item-latter')
})
img[0].addEventListener('mouseout', function() {
    mask[0].classList.remove('mask-latter')
    img[0].classList.remove('inside-item-latter')
})

img[1].addEventListener('mouseover', function() {
    mask[1].classList.add('mask-latter')
    img[1].classList.add('inside-item-latter')
})
img[1].addEventListener('mouseout', function() {
    mask[1].classList.remove('mask-latter')
    img[1].classList.remove('inside-item-latter')
})

img[2].addEventListener('mouseover', function() {
    mask[2].classList.add('mask-latter')
    img[2].classList.add('inside-item-latter')
})
img[2].addEventListener('mouseout', function() {
    mask[2].classList.remove('mask-latter')
    img[2].classList.remove('inside-item-latter')
})

img[3].addEventListener('mouseover', function() {
    mask[3].classList.add('mask-latter')
    img[3].classList.add('inside-item-latter')
})
img[3].addEventListener('mouseout', function() {
    mask[3].classList.remove('mask-latter')
    img[3].classList.remove('inside-item-latter')
})

img[4].addEventListener('mouseover', function() {
    mask[4].classList.add('mask-latter')
    img[4].classList.add('inside-item-latter')
})
img[4].addEventListener('mouseout', function() {
    mask[4].classList.remove('mask-latter')
    img[4].classList.remove('inside-item-latter')
})

img[5].addEventListener('mouseover', function() {
    mask[5].classList.add('mask-latter')
    img[5].classList.add('inside-item-latter')
})
img[5].addEventListener('mouseout', function() {
    mask[5].classList.remove('mask-latter')
    img[5].classList.remove('inside-item-latter')
})