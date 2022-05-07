var nameInput = document.getElementById('name')
var telInput = document.getElementById('tel')
var adviceInput = document.getElementById('advice')
var spanChange = document.getElementsByClassName('inputBox-span')





nameInput.addEventListener("focus", function() {
    spanChange[0].classList.add('inputBox-span-latter')
})
nameInput.addEventListener("blur", function() {
    // console.log(typeof(str));
    let strname = nameInput.value
    if (strname === '') {
        spanChange[0].classList.remove('inputBox-span-latter')
    }
})

telInput.addEventListener("focus", function() {
    spanChange[1].classList.add('inputBox-span-latter')
})
telInput.addEventListener("blur", function() {
    let strtel = telInput.value
    if (strtel === '') {
        spanChange[1].classList.remove('inputBox-span-latter')
    }
})

adviceInput.addEventListener("focus", function() {
    spanChange[2].classList.add('inputBox-span-latter')
})
adviceInput.addEventListener("blur", function() {
    let stradvice = adviceInput.value
    if (stradvice === '') {
        spanChange[2].classList.remove('inputBox-span-latter')
    }
})