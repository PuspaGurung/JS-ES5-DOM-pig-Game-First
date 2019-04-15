document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').textContent = document.querySelector('#score-1').textContent = document.querySelector('#current-0').textContent =
document.querySelector('#current-1').textContent = 0;
var currentScore = 0;
var roundscore = [0,0];
var score = 0;
var activeplayer = 0;
var rollme = true;

	 
	
 document.querySelector('.btn-roll').addEventListener('click', function(){
	 if (rollme){
		 
		 
		 var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
		
	for (var i=0; i<6; i++){
	score = Math.floor( Math.random(i) * 6) + 1;
		}
	  
	 diceDOM.src= 'dice-' + score + '.png';
	 if( score !==1){
		 currentScore = currentScore + score;
	 	document.querySelector('#current-' + activeplayer).textContent = currentScore; 
	 }
	else repeatFunction()
		 
	 }
					
	 });

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(rollme){
		
		roundscore[activeplayer] += currentScore;
	document.getElementById('score-' + activeplayer).textContent = roundscore[activeplayer];
	
	
	if(roundscore[activeplayer] >=20){
		
		document.getElementById('name-' + activeplayer).textContent = 'Player ' + ( activeplayer + 1 ) + ' winner !!';
		
		newWinner();
		rollme = false;
		
		//document.querySelector('.btn-roll').disabled = true;
		//document.querySelector('.btn-hold').disabled = true;
		
	}
	
	repeatFunction();
		
	}

	
	
	 });



function repeatFunction(){
	activeplayer === 0 ? activeplayer =1 : activeplayer = 0; 
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display='none';
	
	currentScore = 0;
	document.querySelector('#current-' + activeplayer).textContent = currentScore;
	
		
};

function newWinner(){
	//document.querySelector('.btn-roll').disabled = false;
	//document.querySelector('.btn-hold').disabled = false;
	if (rollme = true) {
		
		currentScore = 0;
	document.querySelector('#current-0').textContent = currentScore;
	document.querySelector('#current-1').textContent = currentScore;
	roundscore[0] = 0;
	roundscore[1] = 0;
	}
	
	
	//console.log(se);
	
};

// NEW GAME
document.querySelector('.btn-new').addEventListener('click', function(){
	
	newWinner ();
		
	document.getElementById('score-0').textContent = roundscore[0];
	document.getElementById('score-1').textContent = roundscore[1];
	
	document.getElementById('name-0').textContent = 'Player 1 ';
	document.getElementById('name-1').textContent = 'Player 2 ';
	
	
	document.getElementById('name-' + activeplayer).textContent = 'Player ' + activeplayer;
});

