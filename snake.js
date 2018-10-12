

class Snake{
  constructor(parts, dir, res){
  	this.parts = parts;
  	this.dir = dir;
    this.res = res;
    this.increasing = false
    this.selfIntersects = false
  }

  updateSnake(){
  	if(this.dir == "up"){
<<<<<<< HEAD
  		this.parts[0][1] -= res;
  	}
  	else if(this.dir == "right"){
      this.parts[0][0] += res;
  	}
  	else if(this.dir == "down"){
      this.parts[0][1] += res;
  	}
  	else if(s.dir == "left"){
      this.parts[0][0] -= res;
=======
      this.parts.unshift(new Coordinate(this.parts[0].x, this.parts[0].y - res));
  	}
  	else if(this.dir == "right"){
      this.parts.unshift(new Coordinate(this.parts[0].x + res, this.parts[0].y));
  	}
  	else if(this.dir == "down"){
      this.parts.unshift(new Coordinate(this.parts[0].x, this.parts[0].y + res));
  	}
  	else if(s.dir == "left"){
      this.parts.unshift(new Coordinate(this.parts[0].x - res, this.parts[0].y));
>>>>>>> e0aefd6 (Added food collection, snake growth, game ends upon collision)
  	}
    if(!this.increasing){
      this.parts.pop();
    }
    else{
      this.increasing = false;
    }
  }

  drawSnake(){
<<<<<<< HEAD
    rect(this.parts[0][0], this.parts[0][1], res, res);
=======
    if(this.selfIntersects){
      fill(color(200, 0, 0));
      noLoop();
      updateHighScore(parseInt($("#score").html()))
    }
    else{
      fill(color(255, 255, 255));
    }
    for(let i in this.parts){
      rect(this.parts[i].x, this.parts[i].y, res, res);
    }
>>>>>>> e0aefd6 (Added food collection, snake growth, game ends upon collision)
  }

  checkBounds(width, height){
    if(this.parts[0][1] < 0){
      console.log(":(")
      this.parts[0][1] = height - this.res;
      console.log(this.parts[0][1]);
    }
    else if(this.parts[0][0] + this.res > width){
      console.log(":O")
      this.parts[0][0] = 0;
    }
<<<<<<< HEAD
    else if(this.parts[0][1] + this.res > height){
      console.log(":)")
      this.parts[0][1] = 0;
=======
    else if(this.parts[0].y + this.res > height){
      this.parts[0].y = 0;
>>>>>>> e0aefd6 (Added food collection, snake growth, game ends upon collision)
    }
    else if(this.parts[0][0] < 0){
      console.log(":D")
      this.parts[0][0] = width - this.res;
    }
  }

  checkSelfIntersect(){
    this.selfIntersects = false;
    for(let i in this.parts){
      if(i == 0){
        continue;
      }
      else{
        if(this.parts[i].x == this.parts[0].x && this.parts[i].y == this.parts[0].y){
          this.selfIntersects = true;
        }
      }
    }
  }

  checkEat(food){
    if(this.parts[0].x / res == food.x && this.parts[0].y / res == food.y){
      food.move(this);
      this.increasing = true
      score=document.getElementById("score").innerHTML;
      document.getElementById("score").innerHTML=++score;

      if((document.getElementById("score").innerHTML % 5 == 0) && (document.getElementById("score").innerHTML != 0)){
        if(fd > 1){
          fd--;
        }
      }
    }

  }

}
<<<<<<< HEAD
=======

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
>>>>>>> 799850c (Added coordinate class and food object)
