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
