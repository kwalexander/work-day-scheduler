// use Moment to display current date in header
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// get event info from user input and keep in local storage
/// user types into text area, then clicks save. When user clicks save, get the parent div hour and store hour + input
var newEvent;
var newTime;

$(".saveBtn").click(function () {
    newTime = $(this).parent().attr("id");
    console.log(newTime);
    newEvent = $(this).siblings(".eventName").val();
    console.log(newEvent);

    saveEvent(newTime, newEvent);
})

var saveEvent = function (time, event) {
    localStorage.setItem(time, event);
};

// dynamically display different colors based on current time
/// define past, current, and future time. Past is grey, current is red, future is green


// load previously saved events from local storage
var loadEvents = function () {
    $("#9 .eventName").val(localStorage.getItem("9"));
    $("#10 .eventName").val(localStorage.getItem("10"));
    $("#11 .eventName").val(localStorage.getItem("11"));
    $("#12 .eventName").val(localStorage.getItem("12"));
    $("#13 .eventName").val(localStorage.getItem("13"));
    $("#14 .eventName").val(localStorage.getItem("14"));
    $("#15 .eventName").val(localStorage.getItem("15"));
    $("#16 .eventName").val(localStorage.getItem("16"));
    $("#17 .eventName").val(localStorage.getItem("17"));
}

loadEvents();