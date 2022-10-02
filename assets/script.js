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
})

// dynamically display different colors based on current time
/// define past, current, and future time. Past is grey, current is red, future is green


// load previously saved events from local storage