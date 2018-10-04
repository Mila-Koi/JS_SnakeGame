class Snake{
  constructor(parts, dir){
  	this.parts = parts;
  	this.dir = dir;
  }
}

let res = 15;
let context = document.getElementById("myCanvas").getContext("2d");
let canvas = context.canvas;

let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#DAE1ED");
gradient.addColorStop(1, "#535456");

canvas.width = 25 * res;
canvas.height = 25 * res;


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
	context.fillRect(s.parts[0][0], s.parts[0][1], res, res);
}

function updateSnake(){
	if(s.dir == "up"){
		s.parts[0][1] -= res;
		if(s.parts[0][1] < 0){
			s.parts[0][1] = canvas.height - res;
		}
	}
	else if(s.dir == "right"){
    s.parts[0][0] += res;
    if(s.parts[0][0] + res > canvas.width){
      s.parts[0][0] = 0;
    }
	}
	else if(s.dir == "down"){
    s.parts[0][1] += res;
    if(s.parts[0][1] + res > canvas.height){
      s.parts[0][1] = 0;
    }
	}
	else if(s.dir == "left"){
    s.parts[0][0] -= res;
    if(s.parts[0][0] < 0){
      s.parts[0][0] = canvas.width - res;
    }
	}
}

let s = new Snake([[0, 0]], "right");
console.log(s);

drawSnake();
console.log(canvas);

function draw(){
  frameRate(10);
  updateSnake();
  drawSnake();
}
