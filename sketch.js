var alien, ranger, laserBeam, gun;
var alienImg, laserImg, rangerImg, bgImg, gunImg;
var counter = 10;
var button;

function preload(){
alienImg = loadImage("images/alien.png");
laserImg = loadImage("images/laser.png");
rangerImg = loadImage("images/space ranger.png");
bgImg = loadImage("images/space background.jpg");
gunImg = loadImage("images/ion blaster.png");

}

function setup(){
createCanvas(600,600);
ranger = createSprite(60,300,20,20);
ranger.addImage(rangerImg);
ranger.scale = 0.9;

gun = createSprite(ranger.x + 30,300,20,20);
gun.addImage(gunImg);
gun.scale = 0.3;

button = createButton("RELOAD");
button.position(800,100);
button.mousePressed(reload);

laserG = new Group();
alienG = new Group();

}

function draw(){
background(bgImg);

ranger.y = mouseY;
gun.y = mouseY + 10;  

spawnEnemy();

if(keyWentDown("space") && counter > 0){
 spawnBullet();
}
 if(laserG.collide(alienG)){
   alienG.destroyEach();
 }

textSize(17);
fill("white");
text("Bullets left: " + counter, 300,40);

drawSprites();
}
function reload(){
  counter = 10;
}
function spawnEnemy(){
  if(frameCount %80 == 0){
    alien = createSprite(random(180,500),-10,20,20);
    alien.addImage(alienImg);
    alien.scale = 0.23;
    alien.velocityY = 5;
    alienG.add(alien);
  }
}

function spawnBullet(){
  
    laserBeam = createSprite(gun.x, gun.y - 5,30,3);
    laserBeam.addImage(laserImg);
    laserBeam.scale = 0.15;
    laserBeam.velocityX = 5;
    counter--;
    laserG.add(laserBeam);
   
}