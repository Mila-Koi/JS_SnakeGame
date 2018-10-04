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
		case 37: s.parts[0][0] -= res; if(s.parts[0][0] < 0){ s.parts[0][0] = canvas.width - res; } break;
		// up arrow
		case 38: s.parts[0][1] -= res; if(s.parts[0][1] < 0){ s.parts[0][1] = canvas.height - res; } break;
		// right arrow
		case 39: s.parts[0][0] += res; if(s.parts[0][0] + res > canvas.width){ s.parts[0][0] = 0; } break;
		// down arrow
		case 40: s.parts[0][1] += res; if(s.parts[0][1] + res > canvas.height){ s.parts[0][1] = 0; } break;
	}
	drawSnake();
}

function drawSnake(){
	context.fillStyle = gradient;
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = "#000000";
	context.fillRect(s.parts[0][0], s.parts[0][1], res, res);
}

function updateSnake(){
	if(dir == 1){
		s.parts[0][1] -= res;
		if(s.parts[0][1] < 0){
			s.parts[0][1] = canvas.height - res;
		}
	}
	else if(dir == 2){
	}
	else if(dir == 3){
	}
	else if(dir == 4){
	}
}

let s = new Snake([[0, 0]]);
console.log(s);

drawSnake();
console.log(canvas);