'use strict';
var prompt=require('prompt-sync').prompt;


var correctAnswers =0;
var wrongAnswers =0;

console.log('Why hello there broteindo I hope you\'re fairing nicely today');
console.log('If you want respect from anybody ever then you must complete this quiz');
console.log('Now that we know eachother better what\' s your name\?');

var playerName = prompt();

console.log('Alright Dingus it is\! I am now going to throw my quiz at you I hope you have prepared yourself');


console.log('Question One: When using css what is the symbol for id\?  .  \# \{ \(');
var userAns = prompt();
if(userAns.toLowerCase === '\#'){
	correctAnswers ++;
	console.log('you got it right you prefect beautiful specimen you\!');
}
else{
	console.log('wrongo ya dingus\!');
	wrongAnswers ++;
}

console.log('Question Two: Can you add links in html\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='yes'){
	correctAnswers++;
	console.log('You got it right\! You are what I would consider perfection\!');
}
else{
	console.log('You better chug some ranch and get yourself together\! Your answer could not have been more wrong\!');
	wrongAnswers ++;
}

console.log('Question Three: Can you add images in css\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='yes'){
	correctAnswers ++;
	console.log('Can I have some your genius please\? You answered correctly\!');
}
else{
	console.log('No you were not right\! Not even close\!');
	wrongAnswers ++;
}

console.log('Question Four:What is the correct symbol for calling a class in css\? \{ \# \. \[');
var userAns = prompt();
if(userAns.toLowerCase ==='.'){
	correctAnswers ++;
	console.log('Correct\! I have to say I would not mind stealing your brain\!');
}
else{
	console.log('dingus dingus dingus dingus\! WRONG YOU GOT IT WRONG\!');
	wrongAnswers ++;
}

console.log('Question Five: Do you have to add a class and id to everything in a html document\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='no'){
	correctAnswers ++;
	console.log('I have never seen anyone ever get a question answer as right as you just did\!');
}
else{
	console.log('How can you walk around and call yourself a human being when you can\'t even manage to this answer right');
	wrongAnswers ++;
}

console.log('Question Six: If I put text in the title tag of a html doc will it be visible\? no or yes\?');
var userAns = prompt();
if(userAns.toLowerCase ==='no'){
	correctAnswers ++;
	console.log('Okay who am I dealing with here Einstein\? You are right\!');
}
else{
	console.log('Nope\! Not right\! Not a wise choice\!');
	wrongAnswers ++;
}
console.log('Question Seven: Is h1 font size bigger than h6\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='yes'){
	correctAnswers ++;
	console.log('You have never been more beautiful than in this moment for your answer was right\!');
}
else{
	console.log('I have never seen a question answered so incorrectly\!');
	wrongAnswers ++;
}

console.log('Question Eight: If elements were being displayed as block would they stack on top of each other\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase === 'yes'){
	correctAnswers ++;
	console.log('Someone must have slipped their smart pants on because that answer was correct\!');
}
else{
	console.log('That answer could not have been more wrong\!');
	wrongAnswers ++;
}

console.log('Question Nine:Can you link your css page under the body tag in your html doc\? yes or no');
var userAns = prompt();
if (userAns.toLowerCase === 'yes'){
	correctAnswers ++;
	console.log('You are correct you can\! I mean it won\'t work but you can most certainly do it');
}
else{
	console.log('Gotcha\! Wrong Answer\! You can link it there it just won\'t work.');
	wrongAnswers ++;
}

console.log('Question Ten:Which of the following is a html tag\? \<anchor\> \<p\> \<picture\> \<changecolor\>');
var userAns = prompt();
if(userAns.toLowerCase === '\<p\>'){
	correctAnswers ++;
	console.log('The p should stand for perfect answer because that is what you gave');
}
else{
	console.log('Nope you are a joke\!');
	wrongAnswers ++;
}
console.log('Question Eleven:Does css stand for complicated shiny shoes\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='yes'){
	console.log('No you are not right in the least\!');
	wrongAnswers ++;
}
else{
	console.log('Yes you managed to answer the question correctly\!');
	correctAnswers ++;
}
console.log('Question Twelve: Would a \<a\> tag naturally dispaly block\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='no'){
	correctAnswers ++;
	console.log('You did it! You answered the question correctly and I believe that you will never be more attractive than in this moment\!');
}
else{
	console.log('Are you joshing me or trying to pull my leg or something\? You didn\'t actually think that was the correct answer did you\?');
	wrongAnswers ++;
}
console.log('Question Thirteen: Would a id override a class\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase === 'yes'){
	correctAnswers ++;
	console.log('This will probably be the proudest moment of your life so don\'t forget it\! You answered the question correctly\!');
	wrongAnswers ++;
}
else{
	console.log('I do believe that I have yet to experience a question answered as wrong as you just answered this question\!');
}
console.log('Question Fourteen:If you were to write a paragraph in your html doc wrapped in \<div\> tags would the text be visible\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='yes'){
	correctAnswers ++;
	console.log('Your answer was not only incredibly impressive\! It was correct\!');
}
else{
	console.log('You are a real dingus you know that\? Your answer could not have been more wrong');
	wrongAnswers ++;
}
console.log('Question Fifteen:Is it true that Steve Jobs created html css and the computer itself\? yes or no');
var userAns = prompt();
if(userAns.toLowerCase ==='yes'){
	wrongAnswers ++;
	console.log('I think someone may have a bit too much padding in the ol\' think box and not enough muscle\! For that was completely and utterly not the correct answer\!');
}
else{
	console.log('Great you were able to not pick a completely stupid answer and you looked really when you chose your answer so correctly\!');
	correctAnswers ++;
}


var percentTotal = (wrongAnswers+correctAnswers/15)*100;
	console.log('percentTotal\%');




