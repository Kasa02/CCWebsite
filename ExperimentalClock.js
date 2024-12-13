let dropX, dropY, dropSize;
let stoneX, stoneY, stoneWidth, stoneHeight;
let impact = 0; //控制水滴击中石头后产生的波纹效果。 
let stoneColor;
let lastSecond = 0;

function setup() {
  createCanvas(600, 600);  // 画布大小设置为600x600
  dropX = width / 2;
  dropY = 0;
  dropSize = 10;

  // 初始化石头为矩形
  stoneX = width / 2 - 100;
  stoneY = height - 100;
  stoneWidth = 200;
  stoneHeight = 50;
  stoneColor = color(random(100, 255), random(100, 255), random(100, 255));
  noCursor();
}

function draw() {

 let mappedMouseY = map(mouseY, 0,  width, 0, 255);
  
  background(mappedMouseY)

  // 获取当前时间的秒数
  let s = second();

  // 如果秒数变化，每秒生成一个新水滴
  if (s != lastSecond) {
    lastSecond = s;
    dropY = 0; // 水滴重新从顶部开始
    impact = 0; // 重置波纹效果
  }

  // 绘制石头（矩形）
  fill(stoneColor);
  noStroke();
  rect(stoneX, stoneY, stoneWidth, stoneHeight, 20);

  // 加速水滴下落，让水滴在一秒内到达石头
  dropY += 10;  // 增加水滴下落速度

  // 检测水滴是否碰到石头
  if (dropY >= stoneY) {
    dropY = stoneY; // 限制水滴的最低位置
    impact += 0.5;  // 增加波纹效果

    // 当水滴接触到石头时，改变石头颜色
    if (impact == 0.5) {  // 确保只触发一次颜色变化
      stoneColor = color(random(0, 255), random(0, 255), random(0, 255));
    }
  }

  // 绘制水滴
  noStroke();
  fill(0, 0, 255, 150);
  ellipse(dropX, dropY, dropSize, dropSize);
  
  // 绘制波纹效果
  if (impact > 0) {
    noFill();
    stroke(0, 100, 200, 150);
    strokeWeight(2);
    ellipse(dropX, dropY + 10, impact * 2, impact * 2);
  }

  // 限制波纹大小，避免过大
  if (impact > 80) {
    impact = 0;
  }

  // 显示时间
  fill(0);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text("Time: " + nf(hour(), 2) + ":" + nf(minute(), 2) + ":" + nf(second(), 2), width / 2, height - 20);//这一段代码有参考

  // 自定义鼠标指针
  noFill();
  stroke(0);
  ellipse(mouseX, mouseY, 20, 20);
}

