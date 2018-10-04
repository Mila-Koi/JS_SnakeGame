let size = 50; // Number of snake pixels the canvas size is
let res = 15; // Number of pixels per "snake pixel"
let width = size * res; // Canvas width and height
let height = size * res;
let snakeLocation = new Coordinate(0, 0);
let s = new Snake([snakeLocation], "right", res);
let f = new Food(Math.floor(width / res / 2), Math.floor(height / res / 2));

function drawFood(){
	fill(color(255, 0, 0));
	rect(f.x * res, f.y * res, res, res);
}


function setup(){
  createCanvas(width, height);
  frameRate(10);
}

function keyPressed(){
	switch(keyCode){
		case LEFT_ARROW: s.dir = "left"; break;
		case UP_ARROW: s.dir = "up"; break;
		case RIGHT_ARROW: s.dir = "right"; break;
		case DOWN_ARROW: s.dir = "down"; break;
	}
}



function draw(){
  clear();
  background(180);
  s.updateSnake();
  s.checkBounds(width, height);
  s.drawSnake();
  drawFood();
}
