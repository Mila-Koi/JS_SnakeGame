

class Snake{
  constructor(parts, dir, res){
  	this.parts = parts;
  	this.dir = dir;
    this.res = res;
  }

  updateSnake(){
  	if(this.dir == "up"){
  		this.parts[0].y -= res;
  	}
  	else if(this.dir == "right"){
      this.parts[0].x += res;
  	}
  	else if(this.dir == "down"){
      this.parts[0].y += res;
  	}
  	else if(s.dir == "left"){
      this.parts[0].x -= res;
  	}
  }

  drawSnake(){
    fill(color(255, 255, 255));
    rect(this.parts[0].x, this.parts[0].y, res, res);
  }

  checkBounds(width, height){
    if(this.parts[0].y < 0){
      this.parts[0].y = height - this.res;
    }
    else if(this.parts[0].x + this.res > width){
      this.parts[0].x = 0;
    }
    else if(this.parts[0][1] + this.res > height){
      this.parts[0].y = 0;
    }
    else if(this.parts[0].x < 0){
      this.parts[0].x = width - this.res;
    }
  }
}
