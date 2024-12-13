let rows = 7;  
let cols = 3;  
let gridWidth, gridHeight; 
let circles = []; 
let cookData = [
  [1, 0, 1], // 周一：早晚
  [0, 1, 1], // 周二：中晚
  [1, 0, 1], // 周三：早晚
  [0, 0, 1], // 周四：晚
  [1, 0, 1], // 周五：早晚
  [1, 1, 1], // 周六：早中晚
  [0, 1, 1]  // 周日：中晚
];

let weekdays = ["M", "Tu", "W", "Th", "F", "Sa", "Su"]; 
let emojis = ["🌞", "🕛", "🌛"]; 

function setup() {
  createCanvas(600, 600); 
  gridWidth = (width - 100) / rows; 
  gridHeight = (height - 200) / cols; 
  textSize(30);  
  textAlign(CENTER, CENTER);  


  for (let i = 0; i < rows; i++) {
    circles[i] = [];
    for (let j = 0; j < cols; j++) {
  
      if (cookData[i][j] === 1) {
        circles[i][j] = {
          x: gridWidth / 2,
          y: gridHeight / 2,
          vx: random(-2, 2), 
          vy: random(-2, 2) 
        };
      } else {
        circles[i][j] = null; 
      }
    }
  }
}

function draw() {
  background("#000000");
  stroke(0);

  // 列标题
  for (let i = 0; i < rows; i++) {
    fill("white");
    text(weekdays[i], 100 + i * gridWidth + gridWidth / 2, 50); 
  }

  // 行标题
  for (let j = 0; j < cols; j++) {
    fill(0);
    text(emojis[j], 50, 100 + j * gridHeight + gridHeight / 2); 
  }

  // 表格
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      fill(240);
      rect(100 + i * gridWidth, 100 + j * gridHeight, gridWidth, gridHeight);
      
   
  // Acknowledgment: ChatGPT provided insights and helped debug this following part:

     // 如果当前格子有小球，则绘制并更新其位置
      if (circles[i][j] != null) {
        let circle = circles[i][j];

        // 更新小球位置
        circle.x += circle.vx;
        circle.y += circle.vy;

        // 碰撞检测：如果小球碰到格子边缘则反弹
        if (circle.x <= 0 || circle.x >= gridWidth) {
          circle.vx *= -1; // 水平方向反弹
        }
        if (circle.y <= 0 || circle.y >= gridHeight) {
          circle.vy *= -1; // 垂直方向反弹
        }

        // 将小球位置相对当前格子的起点转换
        let cx = 100 + i * gridWidth + circle.x;
        let cy = 100 + j * gridHeight + circle.y;

        // 绘制小球
        fill(0);
        ellipse(cx, cy, 20, 20);
      }
    }
  }
}