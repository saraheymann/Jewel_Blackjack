(window).onload = function(){
var wins= 0;
var losses = 0;
var userTotalScore = 0;

// generates a random number for the computer
var valueNumber = Math.floor(Math.random() * 102)+ 19;

// generates a random number for the crystals
var crystalOne = Math.floor(Math.random() * 12)+ 1;
var crystalTwo = Math.floor(Math.random() * 12)+ 1;
var crystalThree = Math.floor(Math.random() * 12)+ 1;
var crystalFour = Math.floor(Math.random() * 12)+ 1;

// shows the computer's number to match in value box
$("#valueBox").html(valueNumber);

// assign the crystal numbers to their buttons
$("#crystalOneId").html(crystalOne);
$("#crystalTwoId").html(crystalTwo);
$("#crystalThreeId").html(crystalThree);
$("#crystalFourId").html(crystalFour);

// when the crystal buttons are clicked, add them to total score

$("#crystalOneId").click(function addCrystalOne(){
	userTotalScore = newScore + crystalOne;
	$(".totalScore").text(userTotalScore);
})

$("#crystalTwoId").click(function addCrystalTwo(){
	userTotalScore = newScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
})

// I need the new score to hold all the values of the different crystals when they are clicked.
// do I push the answers to an array and then add them together?

// if(userTotalScore === valueNumber){
// 	wins++;
// 	reset();
// }else (userTotalScore >= valueNumber){
// 	losses++;
// 	reset();
// }

};





// 	// when you click the button it adds to the score
// 	// if the score of the buttons equals the score of valueBox then you win
// 	// add a win
// 	// reset
// 	// if the score of the buttons goes over the score of valueBox then you lose
// 	// add a loss
// 	// reset
// });
// $('#wins')
// 	// put wins here
// $('losses')
// 	// put losses here
// $('.totalScore')
// 	// total score goes here
// };