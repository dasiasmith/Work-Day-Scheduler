$(document).ready(function () {
    //Use moment.js to display current day and time in correct format
    var currentDay = moment();
    $("#currentDay").text(currentDay.format("MMMM Do YYYY"));
    updateCal(); //Runs update function

$('.saveBtn').on('click', function () {
    /*Action once save button is clicked; the event text that was typed in is saved
    js searches through page to listen for event and at what hour block it was saved into
    and stores it in the local storage AKA 'saves'*/
    var event = $(this).siblings('.event').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, event);
})

//The saved text is then retrieved
$('#8 .event').val(localStorage.getItem('8'));
$('#9 .event').val(localStorage.getItem('9'));
$('#10 .event').val(localStorage.getItem('10'));
$('#11 .event').val(localStorage.getItem('11'));
$('#12 .event').val(localStorage.getItem('12'));
$('#13 .event').val(localStorage.getItem('13'));
$('#14 .event').val(localStorage.getItem('14'));
$('#15 .event').val(localStorage.getItem('15'));
$('#16 .event').val(localStorage.getItem('16'));
$('#17 .event').val(localStorage.getItem('17'));
})

/*This function compares the value of the hour the event is being typed into with the current time
And assgins it a past, present, or future class so that the CSS code will style the correct color*/
function updateCal() {
    var timeCurr = moment().hours();
    $('.time-block').each(function () {
        var editTime = parseInt($(this).attr("id"));
        if (editTime < timeCurr) {
            $(this).addClass('past');
        }else if (editTime == timeCurr) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}


