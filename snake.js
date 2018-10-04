class Snake{
  constructor(parts, dir, res){
  	this.parts = parts;
  	this.dir = dir;
    this.res = res;
  }

  updateSnake(){
  	if(this.dir == "up"){
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
  	}
  }

  drawSnake(){
    rect(this.parts[0][0], this.parts[0][1], res, res);
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
    else if(this.parts[0][1] + this.res > height){
      console.log(":)")
      this.parts[0][1] = 0;
    }
    else if(this.parts[0][0] < 0){
      console.log(":D")
      this.parts[0][0] = width - this.res;
    }
  }
}
