console.prompt = 'Who are they';
var spanText = prompt("Who are they?", "bystander").toUpperCase();
var outlierText = prompt("Who are you?", "upstander").toUpperCase();


var main = document.getElementsByTagName('main')[0];

var width = window.innerWidth;
var height = window.innerHeight;


var fontSizePX = height * 0.05;
var numCharOnRow = width/fontSizePX;
var spanWidth;
var numLines = 30;
var lineHeight = `${100/numLines}vh`;

//FIRST SPAN
var span = document.createElement('span');
span.textContent = spanText;
span.style.color = 'green'; 
span.style.lineHeight = lineHeight;
span.style.fontSize = lineHeight;

main.appendChild(span);
//TODAY I LEARNEDTHIS
//HAVE TO CALCULATE THIS AFTER RENDERING span i.e. append to main in order for this to work
spanWidth = span.getBoundingClientRect().width;

var spanPerRow = Math.floor(width / spanWidth);
var numSpans = spanPerRow * numLines;


for (let i =1; i < numSpans; i++) {
	 //starting from 1 since we already appended 1 span to main
	var span = document.createElement('span');
	span.textContent = spanText;
	span.style.color = 'green'; 
	span.style.lineHeight = lineHeight;
	span.style.fontSize = lineHeight;
	main.appendChild(span);
}

var outlier = main.getElementsByTagName('span')[Math.floor(Math.random()* numSpans)];
outlier.textContent = outlierText;
outlier.style.color = 'white';