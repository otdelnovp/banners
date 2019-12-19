function remCalibrate() {
    var maxRem = 15, minRem = 2,
        w = window.innerWidth,
        h = window.innerHeight,
        sizeWidth = w/100,
        sizeHeight = h/101,
        remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
    remSize = (remSize > maxRem)
        ? maxRem
        : (remSize < minRem) ? minRem : remSize;
    document.documentElement.style.fontSize = remSize + 'px';
};
remCalibrate();
window.addEventListener('resize', remCalibrate, false);