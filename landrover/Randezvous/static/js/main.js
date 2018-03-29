(function() {
    var animationTime = .5;

    var transformElement = function (element, transformCmd) {
        element.style.MozTransform = transformCmd;
        element.style.WebkitTransform = transformCmd;
        element.style.OTransform = transformCmd;
        element.style.MsTransform = transformCmd;
        element.style.transform = transformCmd;
    };

    var easeOutCubic = function (x) { return (--x) * x * x + 1 };
    var easeInCubic = function (x) {
        return Math.pow(x, 8);
    };

    var banner = document.getElementById('banner');
    var bg = document.getElementById('background');
    var rose1 = document.getElementById('rose1');
    var rose2 = document.getElementById('rose2');
    var rose3 = document.getElementById('rose3');
    var rose4 = document.getElementById('rose4');
    var rose5 = document.getElementById('rose5');
    var rose6 = document.getElementById('rose6');
    var shoe1 = document.getElementById('shoe1');
    var shoe2 = document.getElementById('shoe2');
    var nike = document.getElementById('nike');

    function animate(prog) {
        var p = 1 - prog;

        transformElement(banner,
            'translateY(' + 100 * easeInCubic(p) + '%)'
        );

        bg.style.opacity = 1 - easeInCubic(p);

        var progress = easeInCubic(p);

        transformElement(rose1,
            'translate(' + 250 * progress + 'px,' + 50 * progress + 'px) rotate(' + 360 * progress + 'deg)'
        );

        transformElement(rose2,
            'translate(' + 200 * progress + 'px, ' + -20 * progress + 'px)'
        );

        transformElement(rose3,
            'translate(' + 80 * progress + 'px, ' + 40 * progress + 'px) rotate(' + 100 * progress + 'deg)'
        );

        transformElement(nike,
            'translate(' + 200 * progress + 'px, ' + 80 * progress + 'px) rotate(' + 90 * progress + 'deg)'
        );

        transformElement(rose4,
            'translate(' + 20 * progress + 'px, ' + 20 * progress + 'px) rotate(' + 200 * progress + 'deg)'
        );

        transformElement(shoe1,
            'translate(' + 100 * progress + 'px, ' + 10 * progress + 'px) rotate(' + 100 * progress + 'deg)'
        );

        transformElement(shoe2,
            'translate(' + 150 * progress + 'px, ' + 10 * progress + 'px) rotate(' + 120 * progress + 'deg)'
        );

        transformElement(rose5,
            'translate(' + 400 * progress + 'px, ' + 50 * progress + 'px) rotate(' + 180 * progress + 'deg)'
        );

        transformElement(rose6,
            'translate(' + 10 * progress + 'px, ' + 20 * progress + 'px) rotate(' + 120 * progress + 'deg)'
        );
    }

    window.addEventListener('message', function(e) {
        var data = e.data;
        var command = data.split(':');
        var progress = Math.round(parseFloat(command[1]) * 10)/1000;
        if (command[0] === 'animation' && !isNaN(progress)) {
            animate(progress);
        }
    });
})();
