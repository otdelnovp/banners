var gn;

function init_gn() {

  gn = new GyroNorm();

  gn.init().then(function() {
    var isAvailable = gn.isAvailable();
    gn.start(gnCallBack);
  }).catch(function(e){
    console.log(e);
  });

}

function gnCallBack(data) {
  document.getElementById('do_gamma').value = data.do.gamma;
}
