function setup() {
  createCanvas(400, 600);
  
}

function draw() {
  background("rgb(166,235,245)");
  
  drawHead(200, 100);
  drawBody(200, 100);
  drawLegs(200, 100);
  drawScarf(200, 100);

  
  //console.log(mouseX,mouseY);//**to determine X,Y
  
} 

function drawHead(x, y){
  
  push()
  noStroke();
  fill("rgb(255,230,193)")
  ellipse(200, 140, 160, 180);

  ellipse(115, 141, 30, 40);
  ellipse(285, 141, 30, 40);
  ellipse(125, 162, 30, 20);
  ellipse(275, 162, 30, 20);
  
  
  pop()
  
  //draw hair&wrinkle
  push()
  stroke("black");
  strokeWeight(3);
  line(200, 50, 200, 30);
  
  line(161, 63, 155, 49);
  
  line(239, 63, 245, 49);
  line(186, 74, 214, 74);
  line(187, 85, 213, 85);
  line(183, 96, 217, 96);
  
  //nose
  line(200, 96, 200, 170);
  line(200, 170, 186, 157);
  
  //mouth
  fill("white");
  rect(170, 170, 60, 20);
  pop()
   
  push()
  stroke("black");
  strokeWeight(3);
  line(188, 170, 188, 190);
  line(212, 170, 212, 190);
  
  circle(159, 125, 10);
  circle(241, 125, 5);
  pop()
}


function drawBody(x,y){
  push()
  stroke("black");
  strokeWeight(3);
  fill("brown")
  rotate(-25)
  translate(50,-10)
  rect(97, 240, 50, 100, 10);
  pop()
  
  push()
  //body
  stroke("black");
  strokeWeight(3);
  fill("rgb(243,243,130)")
  rect(127, 250, 146, 140, 10);
  pop()
  
  push()
  fill("white");
  stroke("black");
  strokeWeight(3);
  rect(204, 250, 30, 140);
  
  pop()
  
  push()
  fill("black")
  circle(219, 318, 16)
  circle(219, 350, 16)
  push()
  pop()
}

function drawLegs(x,y){
  //legs&feet
  push()
  stroke("black");
  strokeWeight(3);
  line(201, 430, 210, 450);
  
  line(210, 450, 157, 503);
  line(210, 450, 259, 503);
  pop()
  
  push()
  stroke("black");
  strokeWeight(3);
  fill("rgb(252,61,174)");
  ellipse(144, 505, 30, 10);
  ellipse(269, 505, 30, 10);
  pop()
  
  push()
  
  noFill();
  stroke("black");
  strokeWeight(3);

  curve(200, 400, 205, 390, 201, 430, 310, 514);
  pop()
}

function drawScarf(x,y){
  //scarf
  push()
  stroke("black");
  strokeWeight(3);
  fill("brown")
  rect(121, 248, 158, 40, 15);
  rect(121, 217, 158, 40, 25);
  pop()
  
}