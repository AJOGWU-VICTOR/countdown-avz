var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 10);

timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered =  toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(timer);
    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
} 