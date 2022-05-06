var piso, suelo;
var nubess;
var sonido
var muere
var saltar
var puntos=0
var rojo,reset;
var gameestate="INICIO"
var rex;
var cactuss;
var CACTUS
var reximg; 
var cactus;
var Quieropiza
var camino,desierto;
var objeto,volador;
var vivamexico;
var sat;
var cara;
var covid
var raptor;
function preload() { 
  reximg=loadAnimation("EL corredor 10.png","Piza.png","YAKIMESHI.png");
sat=loadImage( "el asustador0.png")
 camino=loadImage("ground2.png");
 objeto=loadImage("PIZA GOD0.png");
cactus=loadImage("quier0.png")
 Quieropiza=loadImage("uwu0.png")
cara=loadImage("error.png")
rojo=loadImage("BOTON-removebg-preview (1).png")  
sonido=loadSound("checkPoint.mp3")
muere=loadSound("die.mp3")
saltar=loadSound("jump.mp3")
} 


function setup() {
  createCanvas(800, 400);
  rex=createSprite(240,244); 
  rex.addAnimation("rexcorriendo",reximg);
  //rex.debug=true
  raptor=createSprite(236,202)
  raptor.addImage("sat",sat)
  raptor.visible=false
  Fin=createSprite(384,291)
  Fin.addImage("covid",cara)
  Fin.scale=6
  Fin.visible=false;
  desierto=createSprite(231,250)
  desierto.addImage("larry",camino);
  desierto.velocityX=-4
  desierto.scale=2;
  desierto.setCollider("rectangle",0,0,800,4)
  
 reset=createSprite(368,291)
reset.addImage(rojo)
reset.scale=2;
  reset.visible=false;
  //desierto.debug=true
  bordes = createEdgeSprites();
 

nubess=new Group( );
  cactuss=new Group( );
}
 
function draw() {
  background(175, 44, 44);
 drawSprites()
  if(gameestate=="INICIO"){
  
 nubes( )
  cactaceae( )
  textSize(20)
  fill("withe")
// text(mouseX+"-"+mouseY,10,30)
    text(" made in caleb",10,30)
//puntaje
 text("puntaje.. "+puntos,478,39)
 // puntos=frameCount
puntos = puntos + Math.round(getFrameRate() / 30);
if(puntos%300==0){
sonido.play()
}
  drawSprites()
 if(desierto.x<0){                                    
 desierto.x=200
 }
if(keyDown("up")         && rex.collide(desierto)     ){                                              
rex.velocityY=-18;
saltar.play()
    }
 
  //si rex esta tocando a cactuss entonces todo se detiene.
if(rex.isTouching(cactuss)){ 
  //para que se ejecute esa funcion del lenguaje para eso sirven los parentesis
muere.play()
  gameestate="end";
} 
}
if(gameestate=="end"){ 
desierto.velocityX=0
cactuss.setVelocityXEach(0) 
rex.visible=false;
raptor.visible=true;
Fin.visible=true;  
reset.visible=true;
nubess.setVelocityXEach(0)
nubess.setLifetimeEach(-1);
//parte del reset y sus funciones😎
if (mousePressedOver(reset)) {
gameestate="INICIO";
Fin.visible=false;  
reset.visible=false;
raptor.visible=false
rex.visible=true
nubess.setLifetimeEach(-1);
desierto.velocityX=-4
//
nubess.destroyEach();
cactuss.destroyEach();
puntos=0  
}
 }
    //es la grevedad del rex
rex.velocityY=rex.velocityY+0.6;
  //rex colisiona sobre desierto para no salir del canvas
rex.collide(desierto);
  


 }



function nubes( ){                                             
if (frameCount%70==0) {                            
volador=createSprite(950,random(100,170));
  volador.addImage("nube",objeto);
  volador.velocityX=-10
  volador.scale=0.7;
  nubess.add(volador)
}
    }




function cactaceae( ){  
var tipoc=Math.round(random(1,2 ))
console.log(tipoc)
if (frameCount%100==0) { 
  
CACTUS=createSprite(950,random(190,219));
  CACTUS.velocityX=-10
  CACTUS.scale=0.3;
  switch (tipoc) {
    case 1:
CACTUS.addImage(cactus);
break;
case 2:
CACTUS.addImage(Quieropiza );
break;}

cactuss.add(CACTUS);
  
CACTUS.lifetime=115
    }
}
    
