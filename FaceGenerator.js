//user-definded variables
let faceColor;
let eyeColor;
let faceSize;

function setup() {
  createCanvas(400, 400);  
  frameRate(15); //帧数设置太高闪得眼睛痛

}

function draw() {
  background(193, 225, 193);

  // 鼠标位置决定变化
  faceSize = map(mouseX, 0, width, 10, 400);
  faceColor = color(map(mouseX, 0, width, 0, 300), map(mouseY, 0, height, 0, 300), 150);
  eyeColor = color(map(mouseX, 0, width, 0, 300), map(mouseY, 0, height, 300, 0), 150);
  keyPressed();


  // 位置+mouseX&mouseY
  let faceX = map(mouseX, 0, width, 0, 400, true);
  let faceY = map(mouseY, 0, height, 0, 400, true);

  // 脸+random+mouseIsPressed
  fill(faceColor);
  r = random(50, 150);
  g = random(50, 200);
  b = random(50, 150);
  if (mouseIsPressed) {
  fill(r, g, b)
  noStroke();
  ellipse(faceX, faceY, faceSize, faceSize);

  }

  //眼睛
  push()
  fill(eyeColor);
  fill("black")
  let eyeSize = faceSize * 0.05;
  ellipse(faceX - faceSize * 0.1, faceY - faceSize * 0.1, eyeSize, eyeSize);
  ellipse(faceX + faceSize * 0.1, faceY - faceSize * 0.1, eyeSize, eyeSize);
  pop()

  //鼻子
  push()
  fill("red")
  let eye2Size = faceSize * 0.05;
  ellipse(faceX - faceSize * 0.01, faceY - faceSize * 0.01, eyeSize, eyeSize);
  ellipse(faceX + faceSize * 0.01, faceY - faceSize * 0.01, eyeSize, eyeSize);
  pop()
}

function keyPressed(){
    if(key === ' '){
      fill("black");
      textSize(40)
      textStyle(BOLDITALIC);
      text("oops!",mouseX,mouseY);
    }
  
}

