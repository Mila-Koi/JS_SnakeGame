

class Snake{
  constructor(parts, dir){
  	this.parts = parts;
  	this.dir = dir;
  }
}

class Food{
  constructor(x, y){
    this.x = x;
    this.y = y;
    }

  move(snake) {
    this.x = Math.floor(Math.random(width) + 1);
    this.y = Math.floor(Math.random(height) + 1);
    for(var part in snake.parts) {
      console.log(part[0]);
    }
  }
}

let res = 15;
let context = document.getElementById("myCanvas").getContext("2d");
let canvas = context.canvas;

let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#DAE1ED");
gradient.addColorStop(1, "#535456");

let width = 25;
let height = 25;

canvas.width = width * res;
canvas.height = height * res;


window.addEventListener("keydown", keyListener, false);

function keyListener(key){
	let keyCode = key.keyCode;
	switch(keyCode){
		// left arrow
		case 37: s.dir = "left"; break;
		// up arrow
		case 38: s.dir = "up"; break;
		// right arrow
		case 39: s.dir = "right"; break;
		// down arrow
		case 40: s.dir = "down"; break;
	}
}

function drawSnake(){
	context.fillStyle = gradient;
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "#000000";
	context.fillRect(s.parts[0].x, s.parts[0].y, res, res);
}

function drawFood(){
	context.fillStyle = "#FF0000";
	context.fillRect(f.x * res, f.y * res, res, res);
}

function updateSnake(){
	if(s.dir == "up"){
		s.parts[0].y -= res;
		if(s.parts[0].y < 0){
			s.parts[0].y = canvas.height - res;
		}
	}
	else if(s.dir == "right"){
    s.parts[0].x += res;
    if(s.parts[0].x + res > canvas.width){
      s.parts[0].x = 0;
    }
	}
	else if(s.dir == "down"){
    s.parts[0].y += res;
    if(s.parts[0].y + res > canvas.height){
      s.parts[0].y = 0;
    }
	}
	else if(s.dir == "left"){
    s.parts[0].x -= res;
    if(s.parts[0].x < 0){
      s.parts[0].x = canvas.width - res;
    }
	}
}
let snakeLocation = new Coordinate(0, 0);
let s = new Snake([snakeLocation], "right");
let f = new Food(Math.floor(width / 2), Math.floor(height / 2));

console.log(s);

drawSnake();
drawFood();
console.log(canvas);

function draw(){
  frameRate(10);
  updateSnake();
  drawSnake();
  drawFood();
}
