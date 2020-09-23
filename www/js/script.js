const newYears = "1 Jan 2021";                  // Goal

function countdown() {                          // Countdown function
    const newYearsDate = new Date(newYears);    // Countdown to January 1st 2021
    const currentDate = new Date();             // Current date

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);      // Countdown in days
    const hours = Math.floor(totalSeconds / 3600) % 24;     // Countdown in hours
    const mins = Math.floor(totalSeconds / 60) % 60;        // Countdown in minutes
    const seconds = Math.floor(totalSeconds) % 60;          // Countdown in secondes

    // Set value into htmlpage 
    document.getElementById("days").innerHTML = days;       
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

}

function formatTime (time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);