var hours;
var minutes;
var seconds;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hours();
  mn = minutes();
  sc = seconds();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAnlge = map(sc, 0, 60, 0, 360);

}

function draw() {
  background(255,255,255);  



  drawSprites();

  function line(){
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
  }
}

function arc(){
  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,100,0);
  pop()
}
