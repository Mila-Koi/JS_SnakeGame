class Food {

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  move(snake) {
    let foundSpot = false


    while(!foundSpot){
      foundSpot = true;

      this.x = floor(Math.random() * width / res);
      this.y = floor(Math.random() * height / res);

      for(let i in snake.parts) {
        if(this.x == snake.parts[i].x / res && this.y == snake.parts[i].y / res){
          foundSpot = false;
        }
      }
    }

  }


  drawFood(res){
  	fill(color(255, 0, 0));
  	rect(f.x * res, f.y * res, res, res);
  }
}
