// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");







//old point//



const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = ""
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(scoreQuestion) {

console.log('Lets play some Scrabble!');
console.log();
scoreQuestion = input.question ("Enter a word to score: ");

let word = scoreQuestion;

console.log(oldScrabbleScorer(word)); 



}




//simple point//



const simplePointStructure = {
  1: ['A', 'B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 

};

function simpleScorer(word) {
word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			letterPoints = letterPoints + parseInt(pointValue);
		 }
 
	  }
	}
	return letterPoints;
 }



//vowel piont//



const vowelPointStructure = {
  1: ['B','C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'], 
  3: ['A', 'E', 'I', 'O', 'U']


};

function vowelBonusScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			letterPoints += parseInt(pointValue);
		 }
 
	  }
	}
	return letterPoints;
 }

function newScrabbleScorer(word) {
	word = word.toLowerCase();
	let letterPoints = 0;

	for (let i = 0; i < word.length; i++) {
			letterPoints += parseInt(newPointStructure[word[i]]);
		 }
	
	return letterPoints;
}



let simpleScore = simpleScorer;

let vowelBonusScore = vowelBonusScorer;

let scrabbleScore = newScrabbleScorer;

const scoringAlgorithms = [
  {name : "Simple Score", 
  description : "Each letter is worth 1 point.", scorerFunction : simpleScore},
  {name : "Bonus Vowels", description : "Vowels are 3 pts, consonants are 1 pt.", scorerFunction : vowelBonusScore},
  {name : "Scrabble", description : "The traditional scoring algorithm.", scorerFunction : newScrabbleScorer}
];

function scorerPrompt() {
  console.log('Lets play some Scrabble!');
console.log();
scoreQuestion = input.question ("Enter a word to score: ");
console.log();
let choice = input.question ('Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system Enter 0, 1, or 2: ');

console.log("Score for '" + scoreQuestion + "': " + scoringAlgorithms[choice].scorerFunction(scoreQuestion));

}

function transform(oldPointStructure) {

let thing = {};

for (const pointValue in oldPointStructure)


 {
 for (let i = 0; i < oldPointStructure[pointValue].length; i++) {

thing[oldPointStructure[pointValue][i].toLowerCase()] = parseInt(pointValue);

 }}

return thing;
}

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

