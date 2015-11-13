var RandomNumber = Math.round(Math.random() * 4 + 1);

var wordArray = ["apple", "banana", "peach", "mango", "squash"];



$("#buttonDiv").click(function() {
	RandomNumber = Math.round(Math.random() * 4 + 1);
	$("#imageDiv").css("background-image", "url(images/dog" + RandomNumber + ".jpg)");
	// console.log("it worked!");
	
	var ArrayRandomNumber = Math.round(Math.random() * 4);
	console.log(wordArray[ArrayRandomNumber]);
	$("#wordArrayDiv").html("<p>" + wordArray[ArrayRandomNumber] + "</p>");
});

// var 




console.log(RandomNumber);

$("body").css("background-image", "url(images/dog1.jpg)");

