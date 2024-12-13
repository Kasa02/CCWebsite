let sceneNum = 0;
let currentScene = 0;
let bgImg, buttonImg;

let buttonX, buttonY, buttonWidth, buttonHeight;

let mouseXPos;
let mouseYPos;
let mouseImg;
let moveSpeed = 5;
let movingLeft = false;
let movingRight = false;


let bgm;

let story = [
"(Press Space to continue.)",
"He had never been here before. But following the aroma’s guidance, he quickly found this house. ",
"The scent of cheese swept away all the little mouse’s fatigue. His stomach growled louder with every step he took toward the house. ",
"Hungry and determined, he decided to enter and search for the delicious treasure.",

"He discovered a small hole—just large enough for him to squeeze through.",
"Carefully, he peeked inside. The room beyond the hole was dimly lit, and towering furniture created a maze of shadows. ",
"He could see a faint, golden glow in the corner of the room. Could it be the cheese he had smelled from afar? With this question in mind, he entered the hole.",
  "(Use the <- -> arrow keys to move the character.)"
];

let storyIndex = 0; 
let storyFinished = false; 

let story2 = [
"As he stepped through the entrance, he noticed a strange device: a contraption he couldn’t identify, something he had never seen before. ",
"The device was covered with patches of black animal hair, scattered unevenly across its surface. The air around it carried an unsettling scent.",
"Cautiously, he crawled through the hole, his tiny paws making soft tapping sounds on the floor. ",

"The house was eerily quiet, except for the occasional creak of the old wood and the distant ticking of a clock. ",

"The little mouse followed the trail of scent, heart pounding with both excitement and fear."
];
let story2Index = 0; 
let story2Finished = false;

let story3 =[
  
"The little mouse spotted the cheese, but it had been placed on a high platform, far out of his reach.",

"This place was filled with the aroma of food—more than that, it was a scent of warmth and happiness, the kind of smell that wrapped around you like a comforting blanket. ",

"The mouse’s tiny nose twitched as he breathed it in, and his empty stomach growled louder than ever. ",

"The hunger gnawing at him grew unbearable, urging him to do whatever it took to claim that piece of cheese.",

"He scurried around the room, his sharp little eyes scanning every corner for something he could use to climb up to the platform. "
];

let story3Index = 0; 
let story3Finished = false;

let story4 =[
"Cat: What do you want, little guy?",
  
"The mouse froze in fear at the sight of the towering figure before him.",

"Silent in its movements, the little mouse had no idea when this massive creature had appeared right in front of him.",
  
"With the courage, the mouse asked, hoping to confirm if this was the legendary creature 'CAT' the elders had warned him about:",
  
"Mouse: Are you a cat?",
  
"The cat smiled slyly and said: Maybe.",
  
"The mouse trembled with fear, worried that the cat might eat him. His tiny mind raced, searching for a way to escape.",
  
"Cat: Don't be afraid, I'm not the kind of cat from the stories who eats mice. Haven't you seen Tom and Jerry? We can be great playmates.",
  
"The mouse blinked in confusion, still unsure whether to trust the cat, as the air between them filled with a curious tension.",
  
"Cat: I guess you want the cheese, right? I could help you getting it."
  
];

let story4Index = 0;
let story4Finished = false;

let story5 =[
"The cat put his paws on the table, lowering its body: Climb onto my head",

"The mouse hesitated for a moment but obediently did as he was told.",

"Carefully, he climbed onto the cat's head, his tiny paws gripping the smooth fur. With a quick leap, he finally reached the top of the table.",

"Mouse: Thank you, Cat.", 

"He looked back with genuine gratitude.",

"Mouse: You're really different from the stories I've heard.",

"The cat chuckled softly, its tail flicking lazily.", 

"Cat: Haha, many things are like that.", 

"The world is full of surprises—go see more of it for yourself.",

"The mouse nodded thoughtfully, the words lingering in his tiny heart as he turned toward the delicious cheese waiting before him."
  
]

let story5Index = 0;
let story5Finished = false;

let mouseCheeseImg; 
let hasCheese = false; 

let showEndText = false;

function preload() {
  bgImg = loadImage('coverPage.jpg');
  buttonImg = loadImage('playButton.png');
  bgm = loadSound('Chopin Nocturne Op. 9, No. 2 Jazz Cover by Pianist Jeremy Siskind [ ezmp3.cc ].mp3');
  bg1Img = loadImage('redHouse.jpg');
  bg2Img = loadImage('CatTree.jpg');
  bg3Img = loadImage('kitchen.jpg');
  bg4Img = loadImage('blackCat.jpg');
  bg5Img = loadImage('SucessScene.png');
  mouseImg = loadImage('littleMouse.png');
  mouseCheeseImg = loadImage('mouseCheese.png');
                             
}

function setup() {
  createCanvas(600, 400);
  buttonX = 390;
  buttonY = 215;
  buttonWidth = 140;
  buttonHeight = 90;

  bgm.loop();
  bgm.setVolume(0.5); 
  mouseXPos = width / 2;
  mouseYPos = height - 130;
}

function draw() {
  if (currentScene === 0) {
    drawScene0();
  } else if (currentScene === 1) {
    drawScene1();
  } else if (currentScene === 2) {
    drawScene2();
  } else if (currentScene === 3) {
    drawScene3();
  } else if (currentScene === 4) {
    drawScene4();
  } else if (currentScene === 5) {
    drawScene5();
  }

  updateMousePosition();
  console.log(mouseX,mouseY);//**to determine X,Y
}

function drawScene0() {
  image(bgImg, 0, 0, width, height); 
  image(buttonImg, buttonX, buttonY, buttonWidth, buttonHeight); 
}

function drawScene1() {
  image(bg1Img, 0, 0, width, height);
  drawMouse();
  drawStoryBox();
}

function drawScene2() {
  image(bg2Img, 0, 0, width, height);
  drawMouse();
   if (!story2Finished) {
    drawStory2Box();
  }
  
}

function drawScene3() {
  image(bg3Img, 0, 0, width, height);
  drawMouse();
    if (!story3Finished) {
    drawStory3Box();
  }
}

function drawScene4() {
  image(bg4Img, 0, 0, width, height);
  drawMouse();
    if (!story4Finished) {
    drawStory4Box();
    }
}

function drawScene5() {
 image(bg5Img, 0, 0, width, height);
  
  drawMouse();
  
    if (!story5Finished) {
    drawStory5Box();
    }
  //console.log(`Mouse Position: (${mouseXPos}, ${mouseYPos})`);
 
    if (mouseXPos >= width - 50) {
    showEndText = true; 
  }

  // "The End"
  if (showEndText) {
    fill("#CE471D"); 
    textSize(50); 
    textAlign(CENTER, CENTER); 
    text("The End", width / 2, height / 2); 
  }
}

function drawMouse() {
  if (hasCheese && mouseCheeseImg) {
    // 如果已经切换，并且新图片已加载
    image(mouseCheeseImg, mouseXPos, mouseYPos, 120, 120);
  } else if (mouseImg) {
    // 默认显示普通小老鼠图片
    image(mouseImg, mouseXPos, mouseYPos, 120, 120);
  }
}

function updateMousePosition() {
  if (movingLeft && mouseXPos > 0) {
    mouseXPos -= moveSpeed;
  }
  if (movingRight && mouseXPos < width - 50) {
    mouseXPos += moveSpeed;
  }


  if (currentScene === 5 && !hasCheese) {
    if (
      abs(mouseXPos - 125) < 20 && 
      abs(mouseYPos - 270) < 20
    ) {
      hasCheese = true; 
      //console.log("Get！");
    }
  }

  // 切换场景的逻辑
  if (mouseXPos >= width - 50 && currentScene >= 1 && currentScene <= 4) {
    currentScene += 1;
    mouseXPos = 0;
  }
}


function mousePressed() {
  if (currentScene === 0) {
    if (
      mouseX > buttonX &&
      mouseX < buttonX + buttonWidth &&
      mouseY > buttonY &&
      mouseY < buttonY + buttonHeight
    ) {
      currentScene = 1;
      mouseXPos = 0;
    }
  }
}

function keyPressed() {
  if (currentScene === 1 && !storyFinished) {
    if (keyCode === 32) { 
      if (storyIndex < story.length - 1) {
        storyIndex++;
      } else {
        storyFinished = true;
      }
    }
  }

  if (currentScene === 2 && !story2Finished) {
    if (keyCode === 32) { 
      if (story2Index < story2.length - 1) {
        story2Index++;
      } else {
        story2Finished = true;
      }
    }
  }
  
    if (currentScene === 3 && !story3Finished) {
    if (keyCode === 32) { 
      if (story3Index < story3.length - 1) {
        story3Index++;
      } else {
        story3Finished = true;
      }
    }
  }
  
  if (currentScene === 4 && !story4Finished) {
    if (keyCode === 32) { 
      if (story4Index < story4.length - 1) {
        story4Index++;
      } else {
        story4Finished = true;
      }
    }
  }
  
   if (currentScene === 5 && !story5Finished) {
    if (keyCode === 32) { 
      if (story5Index < story5.length - 1) {
        story5Index++;
      } else {
        story5Finished = true;
      }
    }
  }

  if (currentScene >= 1 && currentScene <= 5) {
    if (keyCode === LEFT_ARROW) {
      movingLeft = true;
    } else if (keyCode === RIGHT_ARROW) {
      movingRight = true;
    }
  }
}

function keyReleased() {
  if (currentScene >= 1 && currentScene <= 5) {
    if (keyCode === LEFT_ARROW) {
      movingLeft = false;
    } else if (keyCode === RIGHT_ARROW) {
      movingRight = false;
    }
  }
}

function drawStoryBox() {
  if (storyFinished) return;
  fill(255);
  rect(50, height - 100, width - 100, 80, 10);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(story[storyIndex], 60, height - 90, width - 120, 60); 
}

function drawStory2Box() {
  if (story2Finished) return;
  fill(255);
  rect(50, height - 100, width - 100, 80, 10);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(story2[story2Index], 60, height - 90, width - 120, 60);
}

function drawStory3Box() {
  if (story3Finished) return;
  fill(255);
  rect(50, height - 100, width - 100, 80, 10);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(story3[story3Index], 60, height - 90, width - 120, 60);
}

function drawStory4Box() {
  if (story4Finished) return;
  fill(255);
  rect(50, height - 100, width - 100, 80, 10);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(story4[story4Index], 60, height - 90, width - 120, 60);
}

function drawStory5Box() {
  if (story5Finished) return;
  fill(255);
  rect(50, height - 100, width - 100, 80, 10);
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(story5[story5Index], 60, height - 90, width - 120, 60);
}