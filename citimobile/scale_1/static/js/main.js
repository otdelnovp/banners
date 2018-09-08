'use strict';

var wrapper = document.getElementById('citymobil-wrapper');
var people = document.getElementById('citymobil-people');
var pop = document.getElementById('citymobil-pop');
var lastClientY = null;
var maskPos = -100;


function render() {
    pop.style.transform = 'translate(-50%,' + Math.round(maskPos) + 'px)';
    pop.style.webkitTransform = 'translate(-50%,' + Math.round(maskPos) + 'px)';
    wrapper.style.height = 200 + Math.round(maskPos) + 'px';
    people.style.backgroundSize = 'auto ' + (100 - Math.round(maskPos)/2) + '%';
}

setInterval(render, 1000 / 60);

function _countDelta(clientY) {
    var delta = clientY - lastClientY;
    lastClientY = clientY;
    return delta;
}

function onTouchStart(changedTouches) {
    // stopWagering();
    if (changedTouches) {
        lastClientY = changedTouches[0].clientY;
    }
}

function onTouchMove(changedTouches) {
    if (changedTouches) {
        var delta = _countDelta(changedTouches[0].clientY);
        if (delta < 0) {
            return;
        }
        maskPos += delta;
        if (maskPos < -110) {
            maskPos = 110;
        }
        if (maskPos > 0) {
            maskPos = 0;
        }

        if (maskPos > -20) {
            pop.style.opacity = 1;
        } else {
            pop.style.opacity = 0;
        }
    }
}

function onTouchEnd() {
    pop.style.opacity = 0;
    if (maskPos >= -20) {
        window.parent.postMessage('banner:pull', '*');
    }
    wrapper.style.transition = 'transform 0.1s linear';
    setTimeout(function() {
        wrapper.style.transition = '';
    }, 200);

    lastClientY = null;
    maskPos = -100;
}

['pointerstart', 'touchstart'].forEach(function (item) {
    wrapper.addEventListener(item, function (e) {
        onTouchStart(e.changedTouches);
    });
});

['pointermove', 'touchmove'].forEach(function (item) {
    wrapper.addEventListener(item, function (e) {
        onTouchMove(e.changedTouches);
    });
});

['pointerend', 'touchend'].forEach(function (item) {
    wrapper.addEventListener(item, onTouchEnd);
});

wrapper.addEventListener('click', function(e) {
    window.parent.postMessage("banner:click", "*");
});