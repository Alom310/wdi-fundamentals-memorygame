console.log("Up and running!");



var cards = ["queen", "queen","king","king"]

var cardsInPlay = [];

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");
}
};

var flipCard = function(cardId){	
checkForMatch();
console.log("User flipped " + cards[cardId]);
cardsInPlay.push('cards[cardId]');
};
flipCard(0);
flipCard(2);


//from slide 7 of unit 9 
/* if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

**my original **
if (cardsInPlay.length === 2) {
	alert("Sorry, try again!");
}
	else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
*/