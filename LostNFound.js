function setup() {
  createCanvas(400, 400);
  //stroke("black");
  //strokeWeight(3);
  noStroke();
  rectMode(CORNER);
  angleMode(DEGREES);
}

function draw() {
  background(255, 229, 180);
  
  console.log(mouseX,mouseY);//**to determine X,Y
  
  push()
  translate(25,0)
    push()
    fill("orange");
    translate(45, -10);
    triangle(97, 60, 110, 110, 160, 80 );
    pop()


    push()
    fill(240,128,0);
    rotate(20);
    translate(80, -90);
    triangle(97, 60, 110, 110, 160, 80 );
    pop()

    push()
    fill(255,95,21);
    rotate(-25);
    translate(-30, 65);
    triangle(97, 60, 110, 110, 160, 80 );
    pop()

    push()
    fill("orange")
    rotate(-35);
    translate(-75, 110);
    triangle(97, 60, 110, 110, 160, 80 );
    pop()

    push()
    fill("orange")
    rotate(45);
    translate(83, -190);
    triangle(97, 60, 110, 110, 160, 80 );
    pop()

    push()
    fill(53, 94, 59);
    rect(200, 100, 100, 60, 20);//嘴巴
    fill(79, 121, 66);
    circle(200, 120, 120);//头
    
    rect(170, 120, 50, 120, 20);//脖子
    pop()
    
    push()//眼睛
    fill("black");
    circle(190, 100, 30);
    fill("white");
    circle(190, 100, 10);
    fill("black");
    ellipse(280, 120, 8, 12);//鼻孔
    pop()
  pop()
  
  push()
  translate(-5, -47)
    push()
    rotate(20);
    translate(70, -110);
    ellipse(300, 300, 15, 8);//指甲（前肢，前，中）
    rotate(-10);
    ellipse(240, 330, 15, 8);
    rotate(10);
    ellipse(295, 315, 15, 8);
    pop()
  pop()
  push()
  
  push()
  rotate(20);
  translate(40, -110);
  fill(53, 94, 59);
  rect(240, 240, 70, 30, 20);//前肢（后）
  pop()

  push()//尾巴
  fill(53, 94, 59);
  translate(-40, 110);
  triangle(80, 60, 110, 110, 130, 90 );
  pop()
  
  push()//把手
  stroke(138, 154, 91);
  strokeWeight(18);
  noFill();
  circle(140, 210, 90);
  pop()
  
  push()
  fill(79, 121, 66);
  rect(70, 200, 180, 100, 20);//身体
  pop()
  
  push()
  rotate(20);
  translate(40, -110);
  fill(53, 94, 59);
  rect(250, 280, 80, 40, 20);//前肢（前）
  pop()
  
  push()
  rotate(20);
  translate(-100, -60);
  fill(53, 94, 59);
  rect(250, 280, 80, 40, 20);//后肢
  pop()
  
  push()
  rotate(20);
  translate(70, -110);
  ellipse(300, 300, 20, 8);//指甲（前肢，前，中）
  rotate(-10);
  ellipse(245, 330, 20, 8);
  rotate(10);
  ellipse(295, 315, 20, 8);
  pop()
  
 
  push()//后肢指甲
  translate(-150, 0)
    push()
    rotate(20);
    translate(70, -110);
    ellipse(300, 300, 20, 8);//指甲（前肢，前，中）
    rotate(-10);
    ellipse(245, 330, 20, 8);
    rotate(10);
    ellipse(295, 315, 20, 8);
    pop()
  pop()
  
  push()//尾巴尖尖
  fill(240,128,0);
  rotate(-10);
  translate(-100, 100);
  triangle(100, 65, 110, 100, 140, 80 );
  pop()


  
}
 