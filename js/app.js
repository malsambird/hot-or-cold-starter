
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*-- Malcolm's Code Begins  -----------------------*/

var count = 0;
var newGuess;
var randomNumber;

var generateNewNumber = function(){

	Math.floor((Math.random()*101)+1);
	return generateNewNumber;
	
};

randomNumber = generateNewNumber();

/*-- New Game (press button
 and when page loads) --*/
	$(".new").click(function(){
		generateNewNumber();
	/*-- reset guess count --*/
	/*-- clear <ul> guesses --*/
	});

/* Generate random number from 1 - 100 */
/* make sure user guess is valid number */

	$("form").submit(function(event){
	event.preventDefault();
	newGuess = $("#userGuess").val();
	if(newGuess > 100 || newGuess % 1 !== 1) {
		return(false);
	} else {
		$(".guessBox").append("<li>" +newGuess+ "</li>");
		}

	});
/* take user guess and supply feedback */
/* guess should be added to the list items */
/* count guesses, reset to zero at page load */



});


