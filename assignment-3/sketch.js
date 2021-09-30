var mySound;
var playing = false;
var kiwi;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('CAT-KITTY-CAT-CAT');
  kiwi = loadImage('kiwi.png')
}

function setup(){
  frameRate(30);
  createCanvas(500, 500);
  imageMode(CENTER);
  textAlign(CENTER);
}

function kittyParty(columns, rows) {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      image(kiwi, 100 + 70 * i, 100 + 80 * j, 150, 200);
    }
  }
}
function confetti(){
  fill(150,0,200);
  for (i = 0; i < 30; i++){
    ellipse(sin(frameRate/30)*20, sin(frameRate/30)*20, 10, 10)
  }
}

function draw() {
  background('#30416E');
  if (!playing) {
    fill(255);
    textSize(30);
    text("click to start the kitty party!", width / 2, height / 2);
    textSize(15);
    text("(click again to pause)", width/2, height/2 +30);
  } else {
    //preparing oscillation
    let speed = sin(frameCount / 30);
    let oscillating1 = map(speed, -1, 1, .33, 1);
    //big array of kiwis
    push();
    scale(3);
    push();
    translate((sin(frameCount / 4) * 30) - 300, sin(frameCount / 3) * 10);
    kittyParty(8, 7);
    pop();
      //single column of kiwis
    push();
    scale(oscillating1);
    rotate(sin(frameCount / 10));
    kittyParty(1, 3);
    pop();
    pop();
      //2x4 grid of kiwis
    push();
    translate(300, 100);
    push();
    scale(oscillating1);
    rotate(-1 * sin(frameCount / 10));
    kittyParty(2, 4);
    pop();
    pop();
    //4x2 grid of kiwis
    push();
    translate(0, sin(frameCount / 3) * 50 + 100);
    scale(oscillating1);
    kittyParty(4, 2);
    pop();
confetti();

  }
}

function mousePressed() {
  if (playing == false) {
    mySound.loop();
    playing = true;
  } else {
    mySound.pause();
    playing = false;
  }
}
