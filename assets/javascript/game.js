$(document).ready(function(){
var wins= 0;
var losses = 0;
var userTotalScore = 0;

// generates a random number for the computer
var valueNumber = Math.floor(Math.random() * 102)+ 19;

// shows the computer's number to match in value box
$("#valueBox").text(valueNumber);

// generates a random number for the crystals
var crystalOne = Math.floor(Math.random() * 12)+ 1;
var crystalTwo = Math.floor(Math.random() * 12)+ 1;
var crystalThree = Math.floor(Math.random() * 12)+ 1;
var crystalFour = Math.floor(Math.random() * 12)+ 1;

// assign the crystal numbers to their buttons
// $("#crystalOneId").html(crystalOne);
// $("#crystalTwoId").html(crystalTwo);
// $("#crystalThreeId").html(crystalThree);
// $("#crystalFourId").html(crystalFour);

function winGame(){
	wins++;
	$("#wins").text('Wins: '+ wins);
	reset();
}
function loseGame(){
	losses++;
	$("#losses").text('Losses: '+ losses);
	reset();
}

// reset
function reset(){
	var valueNumber = Math.floor(Math.random() * 102)+ 19;
	var crystalOne = Math.floor(Math.random() * 12)+ 1;
	var crystalTwo = Math.floor(Math.random() * 12)+ 1;
	var crystalThree = Math.floor(Math.random() * 12)+ 1;
	var crystalFour = Math.floor(Math.random() * 12)+ 1;
	var userTotalScore = 0;
	$(".totalScore").text(userTotalScore);
	$("#valueBox").text(valueNumber);
}

// when the crystal buttons are clicked, add them to total score
$("#crystalOneId").click(function addCrystalOne(){
	userTotalScore = userTotalScore + crystalOne;
	$(".totalScore").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();

	}else if(userTotalScore > valueNumber){
	loseGame();
}
})
$("#crystalTwoId").click(function addCrystalTwo(){
	 userTotalScore = userTotalScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();

	}else if (userTotalScore > valueNumber){
	loseGame();
}
})
$("#crystalThreeId").click(function addCrystalThree(){
	 userTotalScore = userTotalScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();
	
	}else if (userTotalScore > valueNumber){
	loseGame();
}
})
$("#crystalFourId").click(function addCrystalFour(){
	 userTotalScore = userTotalScore + crystalTwo;
	$(".totalScore").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();
	
	}else if (userTotalScore > valueNumber){
	loseGame();
}
})
});


// };