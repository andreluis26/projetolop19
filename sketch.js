/* 
    Equipe: 
        André Luís Dantas Soares de Araújo - Subturma A (Líder) 
        Etapa 9 e 10
*/


var x, y; // Coordenadas do Jogador
var vidas = 3; // Vidas do Jogador
var pontos = 0; // Pontuação do Jogador
var dificuldade = 1; // Nível de Dificuldade do Jogo
var raioP = 30; // Raio do Jogador
var vxo = []; // Coordenadas da Comida (Eixo X)
var vyo = []; // Coordenadas da Comida (Eixo Y)
var lxo = []; // Coordenadas do Lixo (Eixo X)
var lyo = []; // Coordenadas do Lixo (Eixo Y)
var qtComida = 2; // Quantidade de Comida
var qtComidaMax = 6; // Quantidade Máxima de Comida
var qtLixo = 1; // Quantidade de Comida
var qtLixoMax = 5; // Quantidade Máxima de Lixo
var raio0 = 35; // Raio do Inimigo
var flash = 3; // Velocidade do Inimigo
var tela = 1; // Variável para Alternância entre Telas (Início, Game Over, etc)
var anima; // Imagem do Coala
var coalaAndando = [];
var contFrame = 0
var lixo; // Imagem do Lixo (Inimigo)
var comida; // Imagem da Comida
var floresta; // Imagem da Floresta (Fundo)
var floresta1; // Imagem 2 da Floresta para Tela 1 (Fundo)
var floresta_gameover; // Imagem 3 da Floresta para Tela 3 (Fundo)
var paraFrame = 0;

function preload() {
  for (i = 0; i < 3; i++) {
    coalaAndando[i] = loadImage("coala_"+i+".png");
  }
    lixo = loadImage("lata_de_lixo.png");
    comida = loadImage("folha_do_coala.png");
    floresta = loadImage("floresta.jpg");
    floresta1 = loadImage("floresta_inicio.jpg");
    floresta_gameover = loadImage("floresta_gameover.jpg");
}

function setup() {
  createCanvas(700, 600)
  for (var i = 0;  i <qtComidaMax; i++) { // Vetor da Comida
    vxo [i] = random (50,450);
    vyo [i] = random (150,330);
}
    for (var p = 0;  p <qtLixoMax; p++) { // Vetor do Lixo
    lxo [p] = random (200,550);
    lyo [p] = random (300,450);
}  
  x = 30;
  xd = x; 
  
  y = 270; 
  yd = y; 
}
function draw() {
  if (tela === 1) { // Tela Inicial (Começo do Jogo)
  background (0);
  imageMode(CENTER)
  image(floresta1, 350, 300);
    if (keyIsDown(ENTER)) { // Comando para inciar o jogo
     tela = 2;
  }
 }
  if (tela === 3) { // Game Over (Fim de Jogo)
  background (0);
  imageMode(CENTER)
  image(floresta_gameover, 350, 300);
 }
  
  if (tela === 2) {
  if (vidas <= 0) {
     tela = 3;
  }  
  background (0);
  imageMode(CENTER)
  image(floresta, 350, 300);

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
    
  anima = coalaAndando[contFrame];
    
  fill(255); // Cor do Jogador
  noStroke();
  imageMode(CENTER);
  image(anima, x, y); // Jogador
  fill(0, 102, 153);
  textSize(18);
  text('VIDAS: '+vidas, 100, 30);
  text('PONTOS: '+pontos, 300, 30);
  text('NÍVEL: '+dificuldade, 500, 30);
  fill(140); // Cores das Informações (Vidas, Pontos e Níveis) 
  
  contFrame++; 
    
  if (contFrame > 2) {
    contFrame = 0;
  }
    
  for (var i = 0;  i <qtComida; i++) {
  image(comida, vxo[i], vyo[i]);
     vxo[i] = vxo[i] - flash; // Movimentação da Comida
  	if ( vxo[i] < 0 ) {
     vxo[i] = random(600,550);
     vyo[i] = random(600,450);
   }
  for (var p = 0;  p <qtLixo; p++) {
   image(lixo, lxo[i], lyo[i]);
     fill(50); 
     lxo[i] = lxo[p] - flash; // Movimentação do Lixo
  	if ( lxo[p] < 0 ) {
      lxo[p] = random(700,0);
      lyo[p] = random(700,0);
   }    
    if (dist(x, y, vxo[i], vyo[i]) < raioP + raio0) { // Distância Jogador e Comida
      vxo[i] = random(700,0);
      vyo[i] = random(700,0);
    pontos = pontos + 2;
  }    
    if (dist(x, y, lxo[p], lyo[p]) <= raioP + raio0) { // Distância Jogador e Lixo
    x = 30;
    y = 270;
    vidas = vidas - 1;
  }
    if (pontos >= 15) { // Nível 2
      dificuldade = 2;
      flash = flash + 0.0025;
  }
      if (pontos >= 25) { // Nível 3
      dificuldade = 3;
      flash = flash + 0.0025;
  }
      if (pontos >= 35) { // Nível 4
      dificuldade = 4;
      flash = flash + 0.0025;
  }
      if (pontos >= 45) { // Nível 5
        dificuldade = 5;
      flash = flash + 0.0025;
  }
}
  }
}
}
