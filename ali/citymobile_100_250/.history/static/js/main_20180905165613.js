var progressElement = document.getElementById("progress");

var bg = document.querySelector(".bg");
var house = document.querySelector(".house");
var karusel = document.querySelector(".karusel");
var car = document.querySelector(".car");
var family = document.querySelector(".family");

var preload = (function() {
  var promises = {};

  return function(images) {
    var hash = JSON.stringify(images);

    if (!promises[hash]) {
      promises[hash] = new Promise(function(resolve, reject) {
        var loadLeft = images.length;
        if (loadLeft === 0) {
          resolve();
        } else {
          var onLoad = function() {
            loadLeft -= 1;
            var progress = 1 - loadLeft / images.length;

            progressElement.style.width = progress * 100 + "%";

            if (loadLeft === 0) {
              resolve();
              promises[hash] = null;
            }
          };

          for (var i = 0; i < images.length; i += 1) {
            var img = new Image();
            img.onload = onLoad;
            img.onerror = onLoad;
            img.src = images[i];
          }
        }
      });
    }

    return promises[hash];
  };
})();

function fit() {
  var width = window.innerWidth;
  var heigth = window.innerHeight;
  bg.style.width = width + 200 + "px";
  bg.style.height = heigth + "px";
}

window.addEventListener("resize", fit);
fit();

preload([
  "static/images/logo-min.png",
  "static/images/bg-min.png",
  "static/images/car-min.png",
  "static/images/kachel-min.png",
  "static/images/button.svg",
  "static/images/button_hover.svg",
  "static/images/rub-min.png",
  "static/images/family-min.png",
  "static/images/house-min.png",
  "static/images/karusel_n-min.png",
  "static/images/text.svg"
]).then(function() {
  var preloader = document.getElementById("preload");
  preloader.parentNode.removeChild(preloader);
});

var normalize = function(delta, percent) {
  return -delta + percent * delta * 2;
};

var ALLOW = 30;
var ANIMATE = "animate";
var RETURN_BACK = "returnBack";
var STATE = null;
var QUEUE = null;

var startPoint = {
  x: -1,
  y: -1
};

var prefixes = ["webkit", "moz", "ms", "o", ""];

var rules = [
  {
    element: bg,
    translate: {
      small: "-60px",
      middle: "-80px"
    },
    transition: "0.9s ease"
  },
  {
    element: house,
    translate: {
      small: "-200px",
      middle: "-200px"
    },
    transition: "0.9s ease"
  },
  {
    element: karusel,
    translate: {
      small: "-100px",
      middle: "-100px"
    },
    transition: "0.9s ease"
  },
  {
    element: car,
    translate: {
      small: "-100px",
      middle: "-200px"
    },
    transition: "0.9s ease"
  },
  {
    element: family,
    translate: {
      small: "100px",
      middle: "200px"
    },
    transition: "0.9s ease"
  }
];

function getWindowSize() {
  return window.innerWidth < 1400 ? "small" : "middle";
}

function setProperty(prop, val) {}

function animate() {
  rules.map(function(el) {
    var windowSize = getWindowSize();
    var translate = el.translate[windowSize];

    prefixes.map(function(prefix) {
      el.element.style[prefix + "transform"] =
        "translate(" + translate + ", 0)";
      if (el.transition)
        el.element.style[prefix + "transition"] = el.transition;
    });
  });
}

function returnBack() {
  rules.map(function(el) {
    prefixes.map(function(prefix) {
      el.element.style[prefix + "transform"] = "translate(0, 0)";
    });
  });
}

function getType(x, y) {
  if (startPoint.x === -1) {
    startPoint = { x: x, y: y };
    return;
  } else {
    var diff = startPoint.x - x;
    var absDiff = Math.abs(diff);
    if (absDiff < ALLOW) return;

    if (diff > 0 && STATE !== ANIMATE && !QUEUE) {
      STATE = ANIMATE;
      startPoint = { x: x, y: y, diff: diff };
      return STATE;
    } else if (diff < 0 && STATE !== RETURN_BACK && !QUEUE) {
      STATE = RETURN_BACK;
      startPoint = { x: x, y: y, diff: diff };
      return STATE;
    } else if (diff > 0 && STATE === ANIMATE) {
      startPoint = { x: x, y: y };
    } else if (diff < 0 && STATE === RETURN_BACK) {
      startPoint = { x: x, y: y };
    }
  }
}

function move(e) {
  var data = JSON.parse(e.data);
  var x = data.x;
  var y = data.y;
  if (!(x || y)) return;

  var type = getType(x, y);
  switch (type) {
    case ANIMATE:
      if (!QUEUE) {
        animate();
        QUEUE = setTimeout(function() {
          QUEUE = null;
        }, 900);
      }
      break;
    case RETURN_BACK:
      if (!QUEUE) {
        returnBack();
        QUEUE = setTimeout(function() {
          QUEUE = null;
        }, 900);
      }
      break;
    default:
      break;
  }
}

window.onload = function() {
  window.addEventListener("message", move, true);
};
