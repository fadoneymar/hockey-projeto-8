var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["18d3a680-2296-4eeb-9031-55de04e8c770","e59262f7-931f-4659-9491-4825e42aa43a","959f6401-24bf-4605-a7cb-208c3d1c5585","7225d9ed-cf6d-4639-a241-1e1b9c1b9828","2b32f6bc-49bd-49af-9a99-92625916f2a3"],"propsByKey":{"18d3a680-2296-4eeb-9031-55de04e8c770":{"name":"puck_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png","frameSize":{"x":393,"y":243},"frameCount":1,"looping":true,"frameDelay":2,"version":"wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":243},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wcuV7DcPEac2EjLNAPemwiDn.zqV1cHa/category_sports/puck.png"},"e59262f7-931f-4659-9491-4825e42aa43a":{"name":"ground_stone_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE/category_video_games/ground_stone.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE/category_video_games/ground_stone.png"},"959f6401-24bf-4605-a7cb-208c3d1c5585":{"name":"ground_grass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK/category_video_games/ground_grass.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/48a_8kq4NSAHoLjO0VNWNhoKgKghcJDK/category_video_games/ground_grass.png"},"7225d9ed-cf6d-4639-a241-1e1b9c1b9828":{"name":"brick_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RqWAcwamDLbPJhZ0in3HShZENTicysYE/category_video_games/brick_red.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"RqWAcwamDLbPJhZ0in3HShZENTicysYE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RqWAcwamDLbPJhZ0in3HShZENTicysYE/category_video_games/brick_red.png"},"2b32f6bc-49bd-49af-9a99-92625916f2a3":{"name":"brick_red_2","sourceUrl":"assets/api/v1/animation-library/gamelab/RqWAcwamDLbPJhZ0in3HShZENTicysYE/category_video_games/brick_red.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"RqWAcwamDLbPJhZ0in3HShZENTicysYE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RqWAcwamDLbPJhZ0in3HShZENTicysYE/category_video_games/brick_red.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score=0;
var gameState ="serve";
var computerscore=0;
var raquetescore=0;



var borda1 = createSprite(0,0,800,5);
 borda1.shapeColor = "blue";

var borda2 = createSprite(400,0,5,800);
borda2.shapeColor = "blue";

var borda3 = createSprite(0,0,5,800);
 borda3.shapeColor = "blue";

var borda4 = createSprite(0,400,800,5);
 borda4.shapeColor = "blue";

var cacapa1 = createSprite(200,10,90,15);
  cacapa1.shapeColor = "black";

var cacapa2 = createSprite(200,390,90,15);
  cacapa2.shapeColor = "black";

var computer = createSprite(200,30,45,10);
 computer.setAnimation("ground_stone_1");
 computer.scale = 0.12;
 
var raquete = createSprite(200,370,45,10);
raquete.setAnimation("ground_grass_1");
raquete.scale = 0.12;

var disco = createSprite(200,200,10,10);
disco.setAnimation("puck_1");
disco.scale = 0.05;

 
function draw() {
  background("lightblue");
{
   for (var i = 0; i < 400; i=i+20) 
    line(i,200,i+10,200);
}

    if(gameState == "serve")
  {
     computer.x=disco.x;
   textSize(20);
   stroke("green");
    text("Bem-vindo ! Pressione espaço para atacar.",15,150);
    
    textSize(20);
    text("Mova-se com W,A,S,D",80,250);
    
      if(keyDown("space")){
    disco.velocityX = 7;
    disco.velocityY = 8;
  }
   if(gameState == "play")
  {
  if(disco.isTouching(cacapa1)||disco.isTouching(cacapa2) || computerscore == 2 || raquetescore == 2)
  
   gameState="end";
   
   
  }
   if(gameState == "end")
  { 
       fill("maroon");
       textSize(18);
       text("Game Over haha!",170,160);
    
  disco.velocityX = 0;
  disco.velocityY = 0;
  disco.x=200;
  disco.y=200;
  }
  
  textSize(18);
  fill("maroon");
  text(""+computerscore,25,225);
  text(""+raquetescore,25,185);
  
  computer.x=disco.x;
  
   }  
if(keyDown("a"))
  {
    raquete.x = raquete.x-5;
  }
  if(keyDown("d"))
  {
    raquete.x = raquete.x+5;
  }
  
  if(keyDown("w"))
   {
    raquete.y = raquete.y-5;
   }
  if(keyDown("s"))
   {
    raquete.y = raquete.y+5;
   }

if(disco.isTouching(computer) || disco.isTouching(raquete))
  {
    playSound("hit.mp3",true);
  } 
  
  if(disco.isTouching(cacapa1))
     {
        computerscore=computerscore+1;

        disco.x=200;
        disco.y=200;
        disco.velocityX=0;
        disco.velocityY=0; 
     }
  if(disco.isTouching(cacapa2))
     {
        
        raquetescore=raquetescore+1;
       
        disco.x=200;
        disco.y=200;
        disco.velocityX=0;
        disco.velocityY=0; 
       
}
  
createEdgeSprites();

disco.bounceOff(borda1);
disco.bounceOff(borda2);
disco.bounceOff(borda3);
disco.bounceOff(borda4);
disco.bounceOff(computer);
disco.bounceOff(raquete);

computer.bounceOff(borda1);
computer.bounceOff(borda2);
computer.bounceOff(borda3);
computer.bounceOff(borda4);

computer.bounceOff(cacapa1);

raquete.bounceOff(borda1);
raquete.bounceOff(borda2);
raquete.bounceOff(borda3);
raquete.bounceOff(borda4);

raquete.bounceOff(cacapa2);

drawSprites();

}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
