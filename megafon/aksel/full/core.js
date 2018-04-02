var gn, count = 35, current = 18, gamma = 0, step = 0;
var currentInput = document.getElementById('current'), gammaInput = document.getElementById('gamma'), timer;

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
  gamma = data.do.gamma;
  gammaInput.value = gamma;
  if(gammaInput.value > 10) {
    step = 1;
    clearInterval(timer);
    slider();
  } else if(gammaInput.value < -10) {
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
    currentInput.value = current;
    if(current == 1 || current == count) clearInterval(timer);
  }, 300);
}
