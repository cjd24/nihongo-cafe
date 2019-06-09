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
