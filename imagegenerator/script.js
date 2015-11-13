var RandomNumber = Math.round(Math.random() * 7 + 1);

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