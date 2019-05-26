/* 
    Equipe: 
        André Luís Dantas Soares de Araújo - Subturma A (Líder) 
*/

var disparo = false; 
var xd, yd; // Coordenadas do Disparo
var x, y; // Coordenadas do Jogador
var vidas = 3; // Vidas do Jogador
var pontos = 0; // Pontuação do Jogador
var dificuldade = 1; // Nível de Dificuldade do Jogo
var raioP = 25; // Raio do Jogador
var vxo = []; // Coordenadas do Inimigo
var vyo = []; // Coordenadas do Inimigo
var qtObjetos = 2; // Quantidade de Inimigos
var qtObjetosMax = 10; // Quantidade Máxima de Inimigos
var raio0 = 30; // Raio do Inimigo
var flash = 4; // Velocidade do Inimigo


function setup() {
  createCanvas(500, 600)
  for (var i = 0;  i <qtObjetosMax; i++) { // Vetor dos Inimigos
    vxo [i] = random (0,500);
    vyo [i] = random (0,500);
}  
  x = 450;
  xd = x; 
  
  y = 550; 
  yd = y; 
}

function draw() {
  if (keyIsDown(CONTROL) && (! disparo)) { // Tiro do Jogador
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
  background(0);
  if (disparo) { // Comandos do Jogador
    fill(255)
    ellipse(xd,yd,10,10); // Forma do Tiro
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
  fill(255); // Cor do Jogador
  ellipse(x, y, 2*raioP, 2*raioP); // Jogador
  fill(0, 102, 153);
  textSize(18);
  text('VIDAS: '+vidas, 10, 30);
  text('PONTOS: '+pontos, 200, 30);
  text('NÍVEL: '+dificuldade, 400, 30);
  fill(140); // Cores das Informações (Vidas, Pontos e Níveis)
  for (var i = 0;  i <qtObjetos; i++) {
  square(vxo[i], vyo[i], 55, 55);
     vxo[i] = vxo[i] + flash; // Movimentação do Inimigo
  	if ( vxo[i] > width ) {
     vxo[i] = random(-550,-550); // Coordenadas de Movimentação do Inimigo (Eixo X)
     vyo[i] = random(-450,-350); // Coordenadas de Movimentação do Inimigo (Eixo Y)
  }    
    if (dist(x, y, vxo[i], vyo[i]) < raioP + raio0) { // Distância Jogador e Inimigo
    x = 450;
    y = 550;
    vidas = vidas - 1;
  }    
    if (dist(xd, yd, vxo[i], vyo[i]) < raioP + raio0) { // Distância Tiro e Inimigo
    vxo[i] = 500;
    vyo[i] = 250;
    pontos = pontos + 2;
    if (pontos == 10) { // Nível 2
      dificuldade = 2;
      qtObjetos++;
      flash = flash + 1;
 }
      if (pontos == 20) { // Nível 3
      dificuldade = 3;
      qtObjetos++;
      flash = flash + 1;
 }
      if (pontos == 30) { // Nível 4
      dificuldade = 4;
      qtObjetos++;
      flash = flash + 1;
 }
      if (pontos == 40) { // Nível 5
      dificuldade = 5;
      qtObjetos++;
      flash = flash + 1;
   }
  }
 }
} 
