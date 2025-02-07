var starImg,bgImg;
var star, starBody;
var music
var fairy, fairyAmt

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyAmt = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	music = loadSound("sound/JoyMusic.mp3");
}


function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	music.loop();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(200,600,50,50);
	fairy.addAnimation("ANIMATION",fairyAmt);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed();
  //write code to stop star in the hand of fairy
  if (star.y > 470 && star.position.y > 470) {
	  matter.body.setStatic(starBody,true)

  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		matter.body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyDown("left_arrow")) {
		fairy.x -= 3
	}
	if (keyDown("right_arrow")) {
	    fairy.x += 3
	}
}
