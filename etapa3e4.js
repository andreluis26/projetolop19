/* 
    Equipe: 
        André Luís Dantas Soares de Araújo - Subturma A (Líder) 
        Etapa 3 e 4
*/

var danvers = 0;
var disparo = false; 
var xd, yd;
var x, y; 

function setup() {
  createCanvas(400, 400)
  x = 350;
  xd = x; 
  
  y = 350; 
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
  
  ellipse(x, y, 55, 55);
  square(danvers, 50, 55);
   danvers = danvers + 5; 
  if ( danvers > width ) {
    danvers = random(-500,-50); 
   }
  }  
