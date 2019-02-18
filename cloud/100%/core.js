function remCalibrate() {
    var maxRem = 15, minRem = 6,
        w = window.innerWidth,
        h = window.innerHeight,
        sizeWidth = w/120,
        sizeHeight = h/90,
        remSize = (sizeWidth < sizeHeight) ? sizeWidth : sizeHeight;
    remSize = (remSize > maxRem)
        ? maxRem
        : (remSize < minRem) ? minRem : remSize;
    document.documentElement.style.fontSize = remSize + 'px';
};
remCalibrate();
window.addEventListener('resize', remCalibrate, false);