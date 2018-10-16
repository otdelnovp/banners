'use strict';
document.addEventListener('touchend', function(){});

window.addEventListener('message', function(e) {
    if (e.data === 'carousel:viewable') {
        document.documentElement.className = 'run';
        setTimeout(function() {
            try {
                document.getElementsByClassName('item__text_tablet')[0].style.opacity = 0;
                setTimeout(function() {
                    document.getElementsByClassName('item__text_tablet')[0].style.display = 'none';
                    document.getElementsByClassName('item__text_tablet_2')[0].style.display = 'block';
                    setTimeout(function() {
                        document.getElementsByClassName('item__text_tablet_2')[0].style.opacity = 1;
                    }, 100);
                }, 500);
            } catch(e) {

            }
        }, 1500);
    }
});

var currentWidth = window.innerWidth;
window.addEventListener("resize", function() {
    if(window.innerWidth !== currentWidth) {
        document.documentElement.className = '';
        setTimeout(function() {
            document.documentElement.className = 'run';
        },100);
        currentWidth = window.innerWidth;
    }
}, false);