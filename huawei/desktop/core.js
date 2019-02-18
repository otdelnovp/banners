function remCalibrate() {
    var maxRem = 12, minRem = 5,
        w = window.innerWidth,
        h = window.innerHeight,
        sizeWidth = w/100,
        sizeHeight = h/66,
        remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
    remSize = (remSize > maxRem)
        ? maxRem
        : (remSize < minRem) ? minRem : remSize;
    document.documentElement.style.fontSize = remSize + 'px';
};
remCalibrate();
window.addEventListener('resize', remCalibrate, false);

//

function init() {

    document.getElementById("next").addEventListener("click", function() {
        document.getElementById("banner").classList.add('final');
    }, false);

    var icons = document.querySelectorAll(".select-icon");
    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener("click", function(e) {
            var name = e.target.getAttribute('name');
            var current = document.querySelectorAll(".icon__" + name);
            current[0].classList.toggle("selected");
            current[1].classList.toggle("selected");
            if (!!document.querySelectorAll(".selected").length) {
                document.getElementById("next").classList.remove('disabled');
            } else {
                document.getElementById("next").classList.add('disabled');
            }
        });
    }

};
init();