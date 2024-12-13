function setup() {
  createCanvas(600, 600);
  noFill();
}

function draw() {
  background("#FF9800");

  // LINE STYLE
  stroke('#009688');
  strokeWeight(5);

  let gridSize = 10;  
  let maxScale = 45;  

  // Nested For Loop
  // 网格
  for (let i = 0; i < gridSize; i++) { 
    for (let j = 0; j < gridSize; j++) {
      let x = width / gridSize * i;  // 方块的x
      let y = height / gridSize * j; // 方块的y

      // 计算距离-> 这个code利用了d=√（(x2-x1)^2+(y2-y1)^2）
      let d = dist(mouseX, mouseY, x + width / gridSize / 2, y + height / gridSize / 2);

     
      let boxSize;
      if (d < 200) {
        boxSize = map(d, 0, 200, maxScale, width / gridSize);
      } else {
        boxSize = width / gridSize;  // <200的情况
      }

     
      rect(x + (width / gridSize - boxSize) / 2, y + (height / gridSize - boxSize) / 2, boxSize, boxSize);
    }
  }
}
