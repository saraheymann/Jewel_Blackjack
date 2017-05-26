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

// reset
function reset(){
	var userTotalScore = 0;
	var valueNumber = Math.floor(Math.random() * 102)+ 19;
	var crystalOne = Math.floor(Math.random() * 12)+ 1;
	var crystalTwo = Math.floor(Math.random() * 12)+ 1;
	var crystalThree = Math.floor(Math.random() * 12)+ 1;
	var crystalFour = Math.floor(Math.random() * 12)+ 1;
}

// when the crystal buttons are clicked, add them to total score

$("#crystalOneId").click(function addCrystalOne(){
	userTotalScore = userTotalScore + crystalOne;
	$(".totalScore").text(userTotalScore);
	if(userTotalScore === valueNumber){
	reset();
	wins++;
	$("#wins").text('Wins: '+ wins);
	
}else if(userTotalScore > valueNumber){
	reset();
	losses++;
	$("#losses").text('Losses: '+ losses);
	
}
})
$("#crystalTwoId").click(function addCrystalTwo(){
	 userTotalScore = userTotalScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
	if(userTotalScore === valueNumber){
	reset();
	wins++;
	$("#wins").text('Wins: '+ wins);
}else if (userTotalScore > valueNumber){
	reset();
	losses++;
	$("#losses").text('Losses: '+ losses);
}
})
$("#crystalThreeId").click(function addCrystalThree(){
	 userTotalScore = userTotalScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
	if(userTotalScore === valueNumber){
	wins++;
	$("#wins").text('Wins: '+ wins);
	reset();
}else if (userTotalScore > valueNumber){
	losses++;
	$("#losses").text('Losses: '+ losses);
	reset();
}
})
$("#crystalFourId").click(function addCrystalFour(){
	 userTotalScore = userTotalScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
	if(userTotalScore === valueNumber){
	wins++;
	$("#wins").text('Wins: '+ wins);
	reset();
}else if (userTotalScore > valueNumber){
	losses++;
	$("#losses").text('Losses: '+ losses);
	reset();
}
})
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