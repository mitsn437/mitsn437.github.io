document.getElementById("partymp3").play();

function toggleMuteAudio(){
    $("#partymp3").prop("muted",!$("#partymp3").prop("muted"));
}

// jQuery
function UpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var instruments;

    if (width < 500) {
        $("body").css("background", "red");
        instruments="One instrument, smallest size";
        // document.getElementById("partymp3").pause();
        // $("#partymp3").prop("muted");
        $("#partymp3").prop("volume", "0");
        // toggleMuteAudio();
    } else if ((width >= 500) && (width < 650)) {
        $("body").css("background", "blue");
        instruments="Two instruments, 2nd size";
        $("#partymp3").prop("volume", "0.8");
        // !$("#partymp3").prop("muted");
        // toggleMuteAudio();
    } else if ((width >= 650) && (width < 800)) {
        $("body").css("background", "green");
        instruments="Three instruments, 3rd size";
    } else if ((width >= 800) && (width < 950)) {
        $("body").css("background", "yellow");
        instruments="Four instruments, 4th size";
    } else if ((width >= 950)) {
        $("body").css("background", "purple");
        instruments="Five instruments, 5th size";
    }
    $('#jqWidth').html("Screen Width: " + width);
    $('#instrument').html(instruments);
}
$(document).ready(UpdateSize);    // When the page first loads
$(window).resize(UpdateSize);     // When the browser changes size
