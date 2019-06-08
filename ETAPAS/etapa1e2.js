/* 
    Equipe: 
        André Luís Dantas Soares de Araújo - Subturma A (Líder) 
        Etapa 1 e 2
*/

var x = 200;
var y = 350;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
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
  square(140, 190, 55);
}
