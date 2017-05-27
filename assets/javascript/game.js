$(document).ready(function(){
var wins= 0;
var losses = 0;
var userTotalScore = 0;
$("#losses").text('Losses: '+ losses);
$("#wins").text('Wins: '+ wins);

// generates a random number for the computer
var valueNumber = Math.floor(Math.random() * 102)+ 19;

// shows the computer's number to match in value box
$("#valueBox").text(valueNumber);

// generates a random number for the crystals
var crystalOne = Math.floor(Math.random() * 12)+ 1;
var crystalTwo = Math.floor(Math.random() * 12)+ 1;
var crystalThree = Math.floor(Math.random() * 12)+ 1;
var crystalFour = Math.floor(Math.random() * 12)+ 1;

// $("#crystalOneId").text(crystalOne);
// $("#crystalTwoId").text(crystalTwo);
// $("#crystalThreeId").text(crystalThree);
// $("#crystalFourId").text(crystalFour);

// reset
function reset(){
	 userTotalScore = 0;
	 valueNumber = Math.floor(Math.random() * 102)+ 19;
	 crystalOne = Math.floor(Math.random() * 12)+ 1;
	 crystalTwo = Math.floor(Math.random() * 12)+ 1;
	 crystalThree = Math.floor(Math.random() * 12)+ 1;
	 crystalFour = Math.floor(Math.random() * 12)+ 1;
	$("#totalScoreId").text(userTotalScore);
	$("#valueBox").text(valueNumber);
}

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
// when the crystal buttons are clicked, add them to total score
$("#crystalOneId").click(function addCrystalOne(){
	userTotalScore = userTotalScore + crystalOne;
	$("#totalScoreId").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();

	}else if(userTotalScore > valueNumber){
	loseGame();
}
})
$("#crystalTwoId").click(function addCrystalTwo(){
	 userTotalScore = userTotalScore + crystalTwo;
	$("#totalScoreId").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();

	}else if(userTotalScore > valueNumber){
	loseGame();
}
})
$("#crystalThreeId").click(function addCrystalThree(){
	 userTotalScore = userTotalScore + crystalThree;
	$("#totalScoreId").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();
	
	}else if(userTotalScore > valueNumber){
	loseGame();
}
})
$("#crystalFourId").click(function addCrystalFour(){
	 userTotalScore = userTotalScore + crystalFour;
	$("#totalScoreId").text(userTotalScore);
	
	if(userTotalScore === valueNumber){
	winGame();
	
	}else if(userTotalScore > valueNumber){
	loseGame();
}
})
});


// };