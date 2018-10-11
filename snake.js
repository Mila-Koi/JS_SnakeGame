

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
  	}
    if(!this.increasing){
      this.parts.pop();
    }
    else{
      this.increasing = false;
    }
  }

  drawSnake(){
    if(this.selfIntersects){
      fill(color(200, 0, 0));
      noLoop();
    }
    else{
      fill(color(255, 255, 255));
    }
    for(let i in this.parts){
      rect(this.parts[i].x, this.parts[i].y, res, res);
    }
  }

  checkBounds(width, height){
    if(this.parts[0].y < 0){
      this.parts[0].y = height - this.res;
    }
    else if(this.parts[0].x + this.res > width){
      this.parts[0].x = 0;
    }
    else if(this.parts[0].y + this.res > height){
      this.parts[0].y = 0;
    }
    else if(this.parts[0].x < 0){
      this.parts[0].x = width - this.res;
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
    }
  }

}
