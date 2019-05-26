/* 
    Equipe: 
        André Luís Dantas Soares de Araújo - Subturma A (Líder) 
        Etapa 5 e 6
*/

var disparo = false; 
var xd, yd;
var x, y; 
var vidas = 3;
var pontos = 0;
var dificuldade = 1;
var raioP = 25;
var xo = 100;
var yo = 250;
var raio0 = 30;


function setup() {
  createCanvas(500, 500)
  x = 450;
  xd = x; 
  
  y = 450; 
  yd = y; 
}

function draw() {
  if (keyIsDown(CONTROL) && (! disparo)) { 
    disparo = true; 
    xd = x;
    yd = y;     
  }
  if (disparo) {
    yd = yd - 5;
  } 
    if (yd < 0) {
      disparo = false; 
  } 
  background(150);
  if (disparo) {
    fill(255)
    ellipse(xd,yd,10,10);
  }
  if (keyIsDown(RIGHT_ARROW)) {
   x = x + 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
   x = x - 4;
  }
  if (keyIsDown(UP_ARROW)) {
   y -= 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
   y += 4;
  }
  fill(255);
  ellipse(x, y, 2*raioP, 2*raioP);
  fill(0, 102, 153);
  textSize(18);
  text('VIDAS: '+vidas, 10, 30);
  text('PONTOS: '+pontos, 200, 30);
  text('NÍVEL: '+dificuldade, 400, 30);
  fill(70);
  square(xo, yo, 55, 55);
  xo = xo + 4; 
  if ( xo > width ) {
    xo = random(-500,-50);
  }
  if (dist(x, y, xo, yo) < raioP + raio0) {
    x = 450;
    y = 400;
    vidas = vidas - 1;
  }
  if (dist(xd, yd, xo, yo) < raioP + raio0) {
    xo = 500;
    yo = 250;
    pontos = pontos + 1;
  }
}