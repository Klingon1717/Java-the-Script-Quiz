'use strict';
var prompt=require('prompt-sync').prompt;

console.log('Why hello there broteindo I hope you\'re fairing nicely today');
console.log('If you want respect from anybody ever then you must complete this quiz');
console.log('Now that we know eachother better what\' s your name\?');

var playerName = prompt();

console.log('Alright Dingus it is\! I am now going to throw my quiz at you I hope you have prepared yourself');


console.log('Question One: When using css what is the symbol for id\?  .  \# \{ \(');
var userAns = prompt();
if(userAns === '\#'){
	console.log('you got it right you prefect beautiful specimen you\!');
}
else{
	console.log('wrongo ya dingus\!');
}

console.log('Question Two: Can you add links in html\? yes or no');
var userAns = prompt();
if(userAns ==='yes'){
	console.log('You got it right\! You are what I would consider perfection\!');
}
else{
	console.log('You better chug some ranch and get yourself together\! Your answer could not have been more wrong\!');
}

console.log('Question Three: Can you add images in css\? yes or no');
var userAns = prompt();
if(userAns ==='yes'){
	console.log('Can I have some your genius please\? You answered correctly\!');
}
else{
	console.log('No you were not right\! Not even close\!');
}

console.log('Question Four:What is the correct symbol for calling a class in css\? \{ \# \. \[');
var userAns = prompt();
if(userAns ==='.'){
	console.log('Correct\! I have to say I would not mind stealing your brain\!');
}
else{
	console.log('dingus dingus dingus dingus\! WRONG YOU GOT IT WRONG\!');
}

console.log('Question Five: Do you have to add a class and id to everything in a html document\? yes or no');
var userAns = prompt();
if(userAns ==='no'){
	console.log('I have never seen anyone ever get a question answer as right as you just did\!');
}
else{
	console.log('How can you walk around and call yourself a human being when you can\'t even manage to this answer right');
}

console.log('Question Six: If I put text in the title tag of a html doc will it be visible\? no or yes\?');
var userAns = prompt();
if(userAns ==='no'){
	console.log('Okay who am I dealing with here Einstein\? You are right\!');
}
else{
	console.log('Nope\! Not right\! Not a wise choice\!');
}
console.log('Question Seven: Is h1 font size bigger than h6\? yes or no');
var userAns = prompt();
if(userAns ==='yes'){
	console.log('You have never been more beautiful than in this moment for your answer was right\!');
}
else{
	console.log('I have never seen a question answered so incorrectly\!');
}

console.log('Question Eight: If elements were being displayed as block would they stack on top of each other\? yes or no');
var userAns = prompt();
if(userAns === 'yes'){
	console.log('Someone must have slipped their smart pants on because that answer was correct\!');
}
else{
	console.log('That answer could not have been more wrong\!');
}

console.log('Question Nine:Can you link your css page under the body tag in your html doc\? yes or no');
var userAns = prompt();
if (userAns === 'yes'){
	console.log('You are correct you can\! I mean it won\'t work but you can most certainly do it');
}
else{
	console.log('Gotcha\! Wrong Answer\! You can link it there it just won\'t work.');
}

