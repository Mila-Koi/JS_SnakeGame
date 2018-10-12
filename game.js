let size = 50; // Number of snake pixels the canvas size is
let res = 15; // Number of pixels per "snake pixel"
let gameLogo;
let width = size * res; // Canvas width and height
let height = (size - 10) * res;
let snakeLocation = new Coordinate(0, 0);
let gameStarted = false;
let justChangedDir = false;
let s = new Snake([snakeLocation], "right", res);
let f = new Food(Math.floor(width / res / 2), Math.floor(height / res / 2));
var fd = 6;

function preload(){
	gameLogo = loadImage("./thumbnail.png");
}

function setup(){
  var canvas = createCanvas(width, height);
	canvas.parent('canvas-holder');
  frameRate(60);
	update_scores(); // update scores for high score API
  aniText();
}

function aniText(){
    $("#about").fadeIn("slow");
    $("#about").fadeOut("slow");
    $("#about").fadeIn("slow");
    $("#about").fadeOut("slow");
    $("#about").fadeIn("slow");
    $("#about").fadeOut("slow");
    $("#about").fadeIn("slow");
    $("#about").fadeOut("slow");
    $("#about").fadeIn("slow");
    $("#about").fadeOut("slow");
    $("#about").fadeIn("slow");
}

function mouseOverButton(){
	return ((mouseX > (width / 2 - 110)) && (mouseX < (width / 2 + 110)) && (mouseY > (height / 2 + 125)) && (mouseY < (height / 2 + 195)));
}

function keyPressed(){
	switch(keyCode){
		case LEFT_ARROW:
			if(!(s.dir == "right")){
				s.dir = "left";
			}
			break;
		case UP_ARROW:
			if(!(s.dir == "down")){
				s.dir = "up";
			}
			break;
		case RIGHT_ARROW:
			if(!(s.dir == "left")){
				s.dir = "right";
			}
			break;
		case DOWN_ARROW:
			if(!(s.dir == "up")){
				s.dir = "down";
			}
			break;
	}
}



function draw(){
	if(gameStarted){
		rectMode(CORNER);
  	clear();
  	background(180);
<<<<<<< HEAD
<<<<<<< HEAD
		if(frameCount % fd == 0){
=======
		if(frameCount % 6 == 0){
>>>>>>> 99a66f5 (Submit high score to API on death)
				s.updateSnake();
=======
		if(frameCount % fd == 0){
			s.updateSnake();
>>>>>>> 7c4eba7 (Fixed merge conflicts)
		}
  	s.checkSelfIntersect();
  	s.checkBounds(width, height);
  	s.checkEat(f, res);
  	s.drawSnake();
  	f.drawFood(res);



	}
	else{
		background(166, 145, 247);

		if(mouseOverButton()){
			fill(color(204, 170, 255));
		}
		else{
			fill(color(110, 86, 201));
		}
		rectMode(CENTER);
		rect(width / 2, height / 2 + 160, 220, 70);
		imageMode(CENTER);
		image(gameLogo, width/2, height / 3.5 + 50, gameLogo.width / 1.5, gameLogo.height / 1.5);
		textAlign(CENTER);
		textSize(30);
		fill(color(255, 255, 255));
		text("Start Game", width/2, height - 128);

		if(mouseOverButton() && mouseIsPressed){
			startGame();
		}


	}
}


function updateHighScore(score){
	highscore(score);  // submit to API
}




var timeBoi;
function startGame(){
	gameStarted = !gameStarted;
  var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  timeBoi = setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec%60);
      document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  }, 1000);
}
