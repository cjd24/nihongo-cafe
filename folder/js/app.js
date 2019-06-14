var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});

var timer = new Timer();
timer.start({precision: 'seconds'});
timer.addEventListener('secondsUpdated', function (e) {
    $('#gettingValuesExample .hours').html(timer.getTimeValues().hours);
    $('#gettingValuesExample .minutes').html(timer.getTimeValues().minutes);
    $('#gettingValuesExample .seconds').html(timer.getTimeValues().seconds);

    $('#gettingTotalValuesExample .hours').html(timer.getTotalTimeValues().hours);
    $('#gettingTotalValuesExample .minutes').html(timer.getTotalTimeValues().minutes);
    $('#gettingTotalValuesExample .seconds').html(timer.getTotalTimeValues().seconds);
});

var timer = new Timer();
$('#timeTimer.startButton').click(function () {
    timer.start();
});
$('#timeTimer.pauseButton').click(function () {
    timer.pause();
});
$('#timeTimer.resetButton').click(function () {
    timer.reset();
});
timer.addEventListener('secondsUpdated', function (e) {
    $('#timeTimer.values').html(timer.getTimeValues().toString());
});
timer.addEventListener('started', function (e) {
    $('#timeTimer.values').html(timer.getTimeValues().toString());
});
timer.addEventListener('reset', function (e) {
    $('#timeTimer.values').html(timer.getTimeValues().toString());
});  


