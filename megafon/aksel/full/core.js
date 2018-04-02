var gn, count = 35, current = 18, step = 0, gamma = document.getElementById('gamma'), timer;

function init() {

  gn = new GyroNorm();

  gn.init().then(function() {
    var isAvailable = gn.isAvailable();
    gn.start(gnCallBack);
  }).catch(function(e){
    console.log(e);
  });

}

function gnCallBack(data) {
  gamma.value = data.do.gamma;
  if(gamma.value > 10) {
    step = 1;
    clearInterval(timer);
    slider();
  } else if(gamma.value < -10) {
    step = -1;
    clearInterval(timer);
    slider();
  } else {
    step = 0;
    clearInterval(timer);
    slider();
  }
}

function slider() {
  timer = setInterval(function() {
    current = current + step;
    if(current == 1 || current == count) clearInterval(timer);
  }, 300);
}
