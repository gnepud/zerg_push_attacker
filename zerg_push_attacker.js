// Set true for stop attack
var stopAttack = false;
// Set duration = 10 minutes
var duration = 10 * 60 * 1000;
(function(duration){
    var attackFrequency = 200, //milliseconds
        startTime = Date.now(),
        stopTime = startTime + duration,
        attackCount = 0;

    var dispatchMouseEvent = function(target, var_args) {
        var e = document.createEvent("MouseEvents");
        e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
        target.dispatchEvent(e);
    };

    var attackZergs = function(){
        var zergs = document.getElementsByClassName('zr_zergling_container');
        if (zergs.length > 0) {
            for (var i in zergs){
                if (zergs.hasOwnProperty(i) && i !== 'length'){
                    dispatchMouseEvent(zergs[i], 'mousedown', true, true);
                    attackCount += 1;
                }
            }
        }
        if (!stopAttack && stopTime > Date.now()) {
            setTimeout(attackZergs, attackFrequency);
        }else {
            console.log('Your attack count:' + attackCount);
        }
    };

    attackZergs();
})(duration);
