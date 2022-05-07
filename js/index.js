var items = document.getElementsByClassName('banner-list-item');
var preBtn = document.getElementById('pre');
var nextBtn = document.getElementById('next');
var points = document.getElementsByClassName('point-item');

var time = 0;

var index = 0;

function clearActive() {
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'banner-list-item';
        points[i].className = 'point-item';
    }
}

function goIndex() {
    clearActive();
    // console.log(index);
    points[index].className = 'point-item active'
    items[index].className = 'banner-list-item active';
}

function Pre() {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    goIndex();
}

function Next() {
    if (index < 4) {
        index++;
    } else {
        index = 0;
    }
    goIndex();
}

nextBtn.addEventListener('click', function() {
    Next();
    time = 0;
})
preBtn.addEventListener('click', function() {
    Pre();
    time = 0;
})

for (var j = 0; j < points.length; j++) {
    points[j].addEventListener('click', function() {
        // console.log("点击了");
        var pointValues = this.getAttribute('value');
        // console.log(pointValues);
        index = pointValues;
        goIndex();
        time = 0;
    })
}

setInterval(function() {
    time++;
    if (time == 20) {
        Next();
        time = 0;
    }
}, 150)