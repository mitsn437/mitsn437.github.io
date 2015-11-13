/* $(".button").html("Hello world");

var cats = ["cat1.jpg", "cat2.jpg", "cat3.png", "cat4.jpg"]

for (var increment = 0; increment <100; increment++){
$("body").append('<div class="button"></div>');
}


var randomCat = cats[Math.floor(Math.random()*4)];

$("body").append("img src='img/" + randomCat + "'>");


function makePattern(){
        $(".button").each(function() {
    var topPosition = Math.floor(Math.random()*($(window).height()-100) + "px";
    var leftPosition = Math.floor(Math.random()*($(window).width()-100) + "px";
   // $(".button").css("top","100px").css("left","200px");
    $(this).css("top","100px").css("left","200px");
    
    //color
    '#' + Math.floor(Math.random()*16777215).toString(16);
    $(this).css("background-color",newColor);
    
    //size
    var newSize = Math.floor(Math.random()*300) + "px";
    $(this).css("width", newSize).css("height",newSize");
    
    
});

}); */

var cats = ["cat1.jpg", "cat2.jpg", "cat3.png", "cat4.jpg"];

var words = ["hello","world","lorem","ipsum"];

for (var increment = 0; increment < 100; increment++) {
  $("body").append('<div class="button"></div>');
}

var randomCat = cats[Math.floor(Math.random()*4)];

$("body").append("<img src='img/" + randomCat + "'>");


function makePattern() {
    $(".button").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);

});

}

$(window).resize(function() {
  makePattern();
});

$(".activate").click(function(){
  makePattern();
})


for (var myPoem = 0; myPoem < 5; myPoem++) {
  $(".poem").append(words[Math.floor(Math.random()*words.length)]  + " ");
  
}




//NEW

$(window).resize(function(event) {
  console.log($(window).width());
  console.log($(window).height());
})


$(window).mousemove(function(event) {
  var newTop = event.clientX = "px";
  var newLeft = event.clientY = "px";
  $(".ball").css("top",newTop);
  $(".ball").css("left",newLeft);
});

$(window).keypress(function(event) {
  console.log(event);
    if (event.keyCode == 114) {
    $("body").css("background-color", "red");
  }
    
    if (event.keyCode == 103) {
    $("body").css("background-color", "lime");
  }
    
    if (event.keyCode == 98) {
    $("body").css("background-color", "blue");
  }
  
});  