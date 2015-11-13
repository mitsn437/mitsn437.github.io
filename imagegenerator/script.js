/* var RandomNumber = Math.round(Math.random() * 7 + 1);

var image = ["ny1.jpg", "ny2.jpg", "ny3.jpg", "ny4.jpg", "ny5.jpg", "ny6.jpg", "ny7.jpg", "ny8.jpg"];

var quoteArray = ["New York was a city where you could be frozen to death in the midst of a busy street and nobody would notice - Bob Dylan",
            "New York is a sucked orange - Ralph Waldo Emerson", "I love New York City; I've got a gun - Charles Barkley", 
            "New York City is a great monument to the power of money and greed... a race for rent - Frank Lloyd Wright", 
            "Most of my friends in New York are single women or gay men - Sarah Jessica Parker", 
            "Practically everybody in New York has half a mind to write a book... and does - Groucho Marx", 
            "For in that city (New York) there is neurosis in the air which the inhabitants mistake for energy - Evelyn Waugh", 
            "New York is the only city in the world where you can get run down on the sidewalk by a pedestrian - Russell Baker"];

var sound = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3", "sound6.mp3", "sound7.mp3", "sound8.mp3"];


$("#buttonDiv").click(function() {
	RandomNumber = Math.round(Math.random() * 7 + 1);
	$("#imageDiv").css("background-image", "url(img/ny" + RandomNumber + ".jpg)");
	
	var ArrayRandomNumber = Math.round(Math.random() * 7);
	console.log(quoteArray[ArrayRandomNumber]);
	$("#quoteArrayDiv").html("<p>" + quoteArray[ArrayRandomNumber] + "</p>");
	
	var RandomNumber = Math.round(Math.random() * 7);
	console.log(sound[ArrayRandomNumber]);
	$("#soundDiv").css("audio controls autoplay loop" + "url(sounds/sound" + RandomNumber + ".mp3)");

    
});


/* console.log(RandomNumber);

$("body").css("background-image", "url(img/ny1.jpg)"); */




var RandomNumber = Math.round(Math.random() * 7 + 1);

console.log(RandomNumber);

var image = ["ny1.jpg", "ny2.jpg", "ny3.jpg", "ny4.jpg", "ny5.jpg", "ny6.jpg", "ny7.jpg", "ny8.jpg"];

var quoteArray = ["New York was a city where you could be frozen to death in the midst of a busy street and nobody would notice - Bob Dylan",
            "New York is a sucked orange - Ralph Waldo Emerson", "I love New York City; I've got a gun - Charles Barkley", 
            "New York City is a great monument to the power of money and greed... a race for rent - Frank Lloyd Wright", 
            "Most of my friends in New York are single women or gay men - Sarah Jessica Parker", 
            "Practically everybody in New York has half a mind to write a book... and does - Groucho Marx", 
            "For in that city (New York) there is neurosis in the air which the inhabitants mistake for energy - Evelyn Waugh", 
            "New York is the only city in the world where you can get run down on the sidewalk by a pedestrian - Russell Baker"];

var sound = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3", "sound5.mp3", "sound6.mp3", "sound7.mp3", "sound8.mp3"];



$("#buttonDiv").click(function() {

	// ----- Randomized Images -----

	RandomNumber = Math.round(Math.random() * 7 );
	$("#imageDiv").css("background-image", "url(img/ny" + RandomNumber + ".jpg)");
	
	// ----- Randomized Words -----

	var ArrayRandomNumber = Math.round(Math.random() * 7 );
	console.log(quoteArray[ArrayRandomNumber]);
	$("#quoteArrayDiv").html("<p>" + quoteArray[ArrayRandomNumber] + "</p>");
	
	// ----- Randomized Sounds -----

	// first, RandomNumber is already declared, why are you declaring it again below?
	// var RandomNumber = Math.round(Math.random() * 7);
	// if you want to get a NEW random number, you will need to create another variable with a SEPARATE name.
	// you can't use the same name for two separate variables.
	// this is why the random number for the randomized words is called something different from the other randomized number that you're using for the images.
	// does that make sense?
	// let's call it "RandomNumber2"
	var RandomNumber2 = Math.ceil(Math.random() * 7 );
	// this way, we will get a different random number with RandomNumber2

	// not sure what you're doing next... you can't play audio with css...
	// $("#soundDiv").css("audio controls autoplay loop" + "url(sounds/sound" + RandomNumber + ".mp3)");
	// the way you should be playing audio is with the javascript play() function. 
	// info here: http://www.w3schools.com/jsref/dom_obj_audio.asp\
	// try looking this up in google, it honstly has the answers you need!!!
	// start by grabbing the first sound with the ID of "partymp3" which we specified in the HTML document and then add ".play()" to play it
	//document.getElementById("partymp3").play();

	// to randomize...
	// you could randomize these in a few ways...
	// for instance, you would need to give all of the sounds an ID of "sound1", then "sound2", then "sound3", etc. etc. 
	// then, you could just write:
	$('audio').each(function(){
    this.pause(); // Stop playing
    this.currentTime = 0; // Reset time
}); 
    console.log("sound" + RandomNumber2);

	 document.getElementById("sound" + RandomNumber2).play();
	// hope this helps...
	
	//document.getElementById("sound1").pause()
	
	
    
});


/* console.log(RandomNumber);

$("body").css("background-image", "url(img/ny1.jpg)"); */