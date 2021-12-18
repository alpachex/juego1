var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["46fe5399-2ae2-4414-a6cb-6cf662b307b8","8da37721-8755-4639-808d-848328e92e5d","0bf7285d-899c-4d3c-b348-a660ce8e6541","86334509-8820-491e-a778-e5da5af57539","ce5cc8c4-73e7-4489-8207-dab87874360c","b1ed624d-5386-4144-aaa8-7407a418d76c","c1bd1226-6cbf-4434-bd32-cb3b42b8f7bb","62d4cb11-a02f-46e0-bf17-c2b4c08ca498","fb253e17-7dae-4df0-ba90-2eaa42e103e0","de3c6922-0393-47bd-b645-cf9436106ae9","8feb87b3-364a-4578-a1ec-62f44d7b7707","3d85b514-1fdf-4bbb-a4ee-8451a6667159","7b36cf9f-16fa-4b46-8c0b-8d83e2b35196","7888bcf7-08b6-44b3-bdc8-57a7a9910bc1","4c6346f0-d047-4a3e-92da-b1213386c227","4671e8e5-29f3-4eb4-9346-061892038f37","7ebdca34-31e6-4c48-be19-81a3ed83de29","20c56f1f-ad1c-4cbd-8016-5e2ea3c8bda9","e55ae864-fa36-4ea9-9d3e-1222078ed6b5","9a338e1d-8fb1-4c44-9210-8958de4bbe67","a3ba0a29-0069-4f87-8721-0a0ed86b4fab","1ecfb0ac-0a70-481c-b0a8-985abbd0168a","e68185ff-8562-499e-9a71-3ae264af15a4","0a083aaa-7f4c-4098-b223-d0213ed0b004"],"propsByKey":{"46fe5399-2ae2-4414-a6cb-6cf662b307b8":{"name":"persona1","sourceUrl":null,"frameSize":{"x":32,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"lCWcLwL8cln9UPjUWuKnYq4tl9LOWMJL","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":35},"rootRelativePath":"assets/46fe5399-2ae2-4414-a6cb-6cf662b307b8.png"},"8da37721-8755-4639-808d-848328e92e5d":{"name":"mounstro1","sourceUrl":null,"frameSize":{"x":39,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"X8Vr0UCIM9aavAXBRaeANqo1dNLfKdkZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":45},"rootRelativePath":"assets/8da37721-8755-4639-808d-848328e92e5d.png"},"0bf7285d-899c-4d3c-b348-a660ce8e6541":{"name":"mounstro2","sourceUrl":null,"frameSize":{"x":39,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"nqsx8i8a8oXn_8B0kt_JFrS62rMJwp5y","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":45},"rootRelativePath":"assets/0bf7285d-899c-4d3c-b348-a660ce8e6541.png"},"86334509-8820-491e-a778-e5da5af57539":{"name":"mounstro3","sourceUrl":null,"frameSize":{"x":39,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"RPFjdw.l6QCUVSWRmi4Mppw4zJIrQ1nr","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":45},"rootRelativePath":"assets/86334509-8820-491e-a778-e5da5af57539.png"},"ce5cc8c4-73e7-4489-8207-dab87874360c":{"name":"fondo","sourceUrl":"assets/v3/animations/myrDLwZASWvoWWMRVZSAiqRfLGRWG6FHE_VxOZSNv8g/ce5cc8c4-73e7-4489-8207-dab87874360c.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"9KdNSUWjWehyUTqVH3DR3PZo5pj1Am0K","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/myrDLwZASWvoWWMRVZSAiqRfLGRWG6FHE_VxOZSNv8g/ce5cc8c4-73e7-4489-8207-dab87874360c.png"},"b1ed624d-5386-4144-aaa8-7407a418d76c":{"name":"barra1","sourceUrl":null,"frameSize":{"x":264,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"bWUXSxRGlxszBBTp_sMlpL5qymBIk58T","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":35},"rootRelativePath":"assets/b1ed624d-5386-4144-aaa8-7407a418d76c.png"},"c1bd1226-6cbf-4434-bd32-cb3b42b8f7bb":{"name":"barra2","sourceUrl":null,"frameSize":{"x":264,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"E_OLUrUiCzMATRg00uzyFv8cHjDf5rbt","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":35},"rootRelativePath":"assets/c1bd1226-6cbf-4434-bd32-cb3b42b8f7bb.png"},"62d4cb11-a02f-46e0-bf17-c2b4c08ca498":{"name":"barra3","sourceUrl":null,"frameSize":{"x":264,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"ODtAHhcJ151MBNdcsU8xiJzTU4MjRkkD","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":35},"rootRelativePath":"assets/62d4cb11-a02f-46e0-bf17-c2b4c08ca498.png"},"fb253e17-7dae-4df0-ba90-2eaa42e103e0":{"name":"barra4","sourceUrl":null,"frameSize":{"x":264,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZUeuh48wXAW_U1yzzv2sMi4PBdadKrJO","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":35},"rootRelativePath":"assets/fb253e17-7dae-4df0-ba90-2eaa42e103e0.png"},"de3c6922-0393-47bd-b645-cf9436106ae9":{"name":"barra5","sourceUrl":null,"frameSize":{"x":264,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"b579a03GlHyEiN_wQv0PMDdMDIlYzm8Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":35},"rootRelativePath":"assets/de3c6922-0393-47bd-b645-cf9436106ae9.png"},"8feb87b3-364a-4578-a1ec-62f44d7b7707":{"name":"escalera","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"4EGsuX21oVFnk.z9Rexq4CDviDcJF4oF","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/8feb87b3-364a-4578-a1ec-62f44d7b7707.png"},"3d85b514-1fdf-4bbb-a4ee-8451a6667159":{"name":"escalera2","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"GA9cpe9Wh3oY4SH3v1eEBNwShADZmFIo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/3d85b514-1fdf-4bbb-a4ee-8451a6667159.png"},"7b36cf9f-16fa-4b46-8c0b-8d83e2b35196":{"name":"escalera3","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"qlgdvrYbF26OYCUb07soqbzII8HYhjiu","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/7b36cf9f-16fa-4b46-8c0b-8d83e2b35196.png"},"7888bcf7-08b6-44b3-bdc8-57a7a9910bc1":{"name":"barra6","sourceUrl":null,"frameSize":{"x":264,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"QNdF86AyBcpDi_P6Z0U4GPEYSbVEe7Zx","loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":35},"rootRelativePath":"assets/7888bcf7-08b6-44b3-bdc8-57a7a9910bc1.png"},"4c6346f0-d047-4a3e-92da-b1213386c227":{"name":"Over","sourceUrl":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wZWNaEUr6KGawJDGuiwH.tDqkf4X3qSe/category_video_games/textGameOver.png"},"4671e8e5-29f3-4eb4-9346-061892038f37":{"name":"door","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"1g92.vvSjSoeZ2kIPG6h1P08pAf_nxOD","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/4671e8e5-29f3-4eb4-9346-061892038f37.png"},"7ebdca34-31e6-4c48-be19-81a3ed83de29":{"name":"coin","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"XG2NLWc9GJ6nUh.QdZddYbozOPgbtD8Z","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/7ebdca34-31e6-4c48-be19-81a3ed83de29.png"},"20c56f1f-ad1c-4cbd-8016-5e2ea3c8bda9":{"name":"coin2","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"i5quMV4wyC4lFdpERixQUXjpAaihbP6b","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/20c56f1f-ad1c-4cbd-8016-5e2ea3c8bda9.png"},"e55ae864-fa36-4ea9-9d3e-1222078ed6b5":{"name":"coin3","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"IB1CMslMzdW_ESgR14czJZX2_9jxzMQk","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/e55ae864-fa36-4ea9-9d3e-1222078ed6b5.png"},"9a338e1d-8fb1-4c44-9210-8958de4bbe67":{"name":"coin4","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"MsFS1IkMyjDf9aEXZOQRWQJokuDmLjpc","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/9a338e1d-8fb1-4c44-9210-8958de4bbe67.png"},"a3ba0a29-0069-4f87-8721-0a0ed86b4fab":{"name":"coin5","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"12b5gzpeXnOlFKDH_f5LAIhodV.Wa987","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/a3ba0a29-0069-4f87-8721-0a0ed86b4fab.png"},"1ecfb0ac-0a70-481c-b0a8-985abbd0168a":{"name":"coin6","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"nDw.AQ96Mp.u4_rPXYGpfW3INs5nOyZC","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/1ecfb0ac-0a70-481c-b0a8-985abbd0168a.png"},"e68185ff-8562-499e-9a71-3ae264af15a4":{"name":"coin7","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":6,"looping":true,"frameDelay":2,"version":"Dv_7qpO0Vj8zzrQZRWGGlRxv9Wczy7Yt","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":90},"rootRelativePath":"assets/e68185ff-8562-499e-9a71-3ae264af15a4.png"},"0a083aaa-7f4c-4098-b223-d0213ed0b004":{"name":"win","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"6bC2BansWtI7ytwHv_whZDycnF0HmJHe","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0a083aaa-7f4c-4098-b223-d0213ed0b004.png"}}};
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




//fondo:)
//var fondo1 =createSprite(200,200);
//fondo1.setAnimation("fondo");
//escaleras

var escala=createSprite(362,167);
escala.setAnimation("escalera");

var escala2=createSprite(65,285);
escala2.setAnimation("escalera2");

var escala3=createSprite(262,399);
escala3.setAnimation("escalera3");
//jugador y fantasmas :)
var player=createSprite(24,379);
player.setAnimation("persona1");

var fantasma1=createSprite(349,260);
fantasma1.setAnimation("mounstro1");
//fantasma1.velocityX=1;
// 
//
var fantasma2=createSprite(139,122);
fantasma2.setAnimation("mounstro2");
 //fantasma2.velocityX=2;

//var fantasma3=createSprite(168,27);
//fantasma3.setAnimation("mounstro3");
//fantasma3.velocityX=2;
//puerta:)

var puerta=createSprite(20,43);
puerta.setAnimation("door");
//premio

var moneda=createSprite(351,274);
moneda.setAnimation("coin");

var moneda1=createSprite(48,260);
moneda1.setAnimation("coin2");

var moneda2=createSprite(118,152);
moneda2.setAnimation("coin3");

var moneda3=createSprite(349,114);
moneda3.setAnimation("coin4");

var moneda4=createSprite(347,31);
moneda4.setAnimation("coin5");

var moneda5=createSprite(197,32);
moneda5.setAnimation("coin6");

var moneda6=createSprite(45,45);
moneda6.setAnimation("coin7");
//barras:)
var tubo=createSprite(67,320);
tubo.setAnimation("barra1");

var tubo1=createSprite(429,318);
tubo1.setAnimation("barra2");

var tubo2=createSprite(268,200);
tubo2.setAnimation("barra3");

var tubo3=createSprite(229,200);
tubo3.setAnimation("barra4");

var tubo4=createSprite(167,81);
tubo4.setAnimation("barra5");

var tubo5=createSprite(49,81);
tubo5.setAnimation("barra6");

var scorep = 0;

function draw() {




score();
background("grey");
fill("withe");
text("score: "+scorep,47,25);
//rebote de fantasmas:)
createEdgeSprites();

fantasma1.bounceOff(leftEdge);
fantasma1.bounceOff(rightEdge);

fantasma2.bounceOff(leftEdge);
fantasma2.bounceOff(rightEdge);

//fantasma3.bounceOff(leftEdge);
//fantasma3.bounceOff(rightEdge);
//movimiento de persona

if (keyDown(RIGHT_ARROW)) {
player.velocityX=3;
player.velocityY=0;

}

if (keyDown(LEFT_ARROW)) {
player.velocityX= -3;
player.velocityY= 0;

}

if (keyDown(UP_ARROW)) {
player.velocityX=0;
player.velocityY=-3;

}

if (keyDown(DOWN_ARROW)) {
player.velocityX=0;
player.velocityY=3;

}
//rebote de persona

player.bounceOff(topEdge);
player.bounceOff(bottomEdge);
player.bounceOff(rightEdge);
player.bounceOff(leftEdge);

player.bounceOff(tubo);
player.bounceOff(tubo1);
player.bounceOff(tubo2);
player.bounceOff(tubo3);
player.bounceOff(tubo4);
player.bounceOff(tubo5);

if (fantasma1.isTouching(player) || fantasma2.isTouching(player)) {
player.destroy();
var game =createSprite(200,200);
game.setAnimation("Over");
fantasma1.velocityX=0;
fantasma2.velocityX=0;
//fantasma3.velocityX=0;
}

if (player.isTouching(puerta)) {
var gano =createSprite(200,200);
gano.setAnimation("win"); 
fantasma1.velocityX=0;
fantasma2.velocityX=0;
//fantasma3.velocityX=0;
player.velocityX=0; 
player.velocityY=0;
}

function score() {


if (player.isTouching(moneda)) {
scorep ++;    
 moneda.destroy();
playSound("assets/coin.mp3");
}  

if (player.isTouching(moneda1)) {
scorep ++;    
 moneda1.destroy();
 
playSound("assets/coin.mp3");
}    
  
if (player.isTouching(moneda2)) {
scorep ++;    
 moneda2.destroy();
 
playSound("assets/coin.mp3");
}    
  
 if (player.isTouching(moneda3)) {
scorep ++;    
 moneda3.destroy();
 
playSound("assets/coin.mp3");
}   
  
 if (player.isTouching(moneda4)) {
scorep ++;    
 moneda4.destroy();
playSound("assets/coin.mp3");
}   
  
 if (player.isTouching(moneda5)) {
scorep ++;    
 moneda5.destroy();
playSound("assets/coin.mp3");
}   
  
 if (player.isTouching(moneda6)) {
scorep ++;    
 moneda6.destroy();
playSound("assets/coin.mp3");
}   
}
if (keyDown(ENTER)) {
fantasma1.velocityX=3;
fantasma2.velocityX=4;
}
text("press enter to start",38,372);
textSize(24);
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
