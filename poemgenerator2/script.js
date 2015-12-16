// global variables 
var GLOBAL = { 
	largePairings : [
		{"whale.png": ["His blood filled the whole sea,"," that is how big his body would be"]},
		{"fatcat.jpg": ["He could not even swim in the sea,"," that is how big his body would be"]},
		{"bear.png": ["A ship could only carry him in the sea,"," that is how big his body would be"]},
		{"dog.jpg": ["He had such a big head", "maybe it was because he read"]},
		{"argon.jpg": ["He had such a big head", "he found every book easy to be read"]},
		{"rip.jpg": ["He had such a big head", "he could talk to the dead"]},
		{"annoyed.jpg": ["He has such a big heart", "but don’t even make me start"]},
		{"willy.jpg": ["He has such a big heart", "but he loves sugar more than art"]},
		{"avocado.png": ["He has such a big heart","but I don’t know what to write in this part"]}
	],
	smallPairings : [
		{"hill.jpg": ["She is thin", "because she went up a hill"]},
		{"slim.png": ["She is thin", "because she can swim"]},
		{"cactus.png": ["She is thin", "because she will not sit"]},
		{"wall.jpg": ["His head is small", "since he hit a wall"]},
		{"adriano.jpeg": ["His head is small", "since he will only play ball"]},
		{"shaggy.jpg": ["His head is small", "since he is above all"]},
		{"graph.png": ["He might have a small heart", "but his experience was off the chart"]},
		{"jeff.png": ["He might have a small heart", "but it was set on art"]},
		{"greek.png":["He might have a small heart", "but he knew a lot about Greek art"]}
	]
}

// On-load event run program
window.addEventListener("load",run);
    
// Helper function - outputs width, height and arbitrary margin of browser window 
function computeSizes () {     
	var width = $(window).width();
	var height = $(window).height();
	var margin = 100;
	var dimens = {
		height:height,
		width: width,
		margin: margin
	}
	return dimens;
}   

// Called when view is loaded
function run () {
	// Create View
    initializeView();
    // Update View after change in dimensions - width
    $(window).resize(function() {updateView()});
}

// Initialize View on-load
function initializeView(){
	$(".smallImageForPoem").css("display","none");
	$(".largeImageForPoem").css("display","none");
}

// Update View
function updateView(){
	// Adjust margins and displays on update
	 $(".logo").css("display","none");
	 $(".welcomeMessage").css("margin-bottom",50)

	 // Get window width from helper function
     var w = computeSizes().width;

     // Threshold of "small" set arbitrarily to be "900"
     if (w < 900) {

     	// Randomly collect a "small" pair object
        var randomSmallPoem = GLOBAL.smallPairings[Math.floor(Math.random()*GLOBAL.smallPairings.length)];
		// Get string of poem 
        var poemSmallImage = Object.keys(randomSmallPoem).toString();
        // Hide "large" pairings set displays for "small" pairing elements
        $(".largeImageForPoem").css("display","none");
        $(".largepoem1").css("display","none");
        $(".largepoem2").css("display","none");
        $(".smallImageForPoem").css("display","block");
        $(".smallpoem1").css("display","block"); 
        $(".smallpoem2").css("display","block"); 

        // Populate poem and picture
        $(".smallpoem1").text(randomSmallPoem[poemSmallImage][0])
        $(".smallpoem2").text(randomSmallPoem[poemSmallImage][1])
        $(".smallImageForPoem").attr("src","./images/"+poemSmallImage);
     } 

     else {

     	// Randomly collect a "large" pair object
     	var randomLargePoem = GLOBAL.largePairings[Math.floor(Math.random()*GLOBAL.largePairings.length)];
     	// Get string of poem 
     	var poemLargeImage = Object.keys(randomLargePoem).toString();

     	// Hide "small" pairings set displays for "large" pairing elements
     	$(".smallImageForPoem").css("display","none");
     	$(".smallpoem1").css("display","none");
     	$(".smallpoem2").css("display","none");
     	$(".largeImageForPoem").css("display","block");
     	$(".largepoem1").css("display","block");
     	$(".largepoem2").css("display","block");

     	// Populate poem and picture
     	$(".largepoem1").text(randomLargePoem[poemLargeImage][0])
     	$(".largepoem2").text(randomLargePoem[poemLargeImage][1])
     	$(".largeImageForPoem").attr("src","./images/"+poemLargeImage);
	}  
}