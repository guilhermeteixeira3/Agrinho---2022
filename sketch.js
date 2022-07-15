var play
var q = false
var win
var lose
var winl = 0.1
var winh = 0.1
var losel = 0.1
var loseh = 0.1
var playp = false
var playp1 = true
var plays1 = 0
var plays
var trilha
var erro
var acerto
var playx = 100
var playy = 100
var playxx = 250
var playyy = 60
var img
var img2
var img3
let xlo = 250;
var maca
var maca1
var banana
var banana1
var garrafa
var vidro
var lata
var peixe
var peixe1
var osso
var osso1
var papelao
var papelao1
var lata1
var vidro1
var garrafa1
let pr1 = 1
//let pry = 5
let parametro = 1
let certo = 0
let errado = 0
let parametro1 = 1
let xo = 5
let xoo = 5
let xoo1 = 305
let xom = 80
let xom1 = 380
let xob = 155
let xob1 = 455
let xop = 230
let xop1 = 530
let ylo = 180
let xog = 5
let xog1 = 305
let xopa = 80
let xopa1 = 380
let xol = 155
let xol1 = 455
let xov = 230
let xov1 = 530
let colidiu = false
let pryo = 5
let pryo1 = 5
let prym = 5
let prym1 = 5
let pryb = 5
let pryb1 = 5
let pryp = 5
let pryp1 = 5
let pryg = 5
let pryg1 = 5
let prypa = 5
let prypa1 = 5
let pryl = 5
let pryl1 = 5
let pryv = 5
let pryv1 = 5
let comeco = false

function preload(){
  win = loadImage("fantasia2.svg")
  lose = loadImage("fantasia1.svg")
  play = loadImage("play.png")
  plays = loadSound("plays.mp3")
  acerto = loadSound("acerto.mp3")
  erro = loadSound("erro.mp3")
  trilha = loadSound("trilha.mp3")
  img = loadImage("lixeiraOrganica.png")
  img2 = loadImage("reciclavel.png")
  img3 = loadImage("reciclavel.png")
  maca = loadImage("maca.png")
  maca1 = loadImage("maca.png")
  banana = loadImage("banana.png")
  banana1 = loadImage("banana.png")
  garrafa = loadImage("garrafa.png")
  lata = loadImage("lata.png")
  garrafa1 = loadImage("garrafa.png")
  lata1 = loadImage("lata.png")
  peixe = loadImage("peixe.png")
  peixe1 = loadImage("peixe.png")
  osso = loadImage("osso.png")
  osso1 = loadImage("osso.png")
  vidro = loadImage("vidro.png")
  papelao = loadImage("papelao.png")
  vidro1 = loadImage("vidro.png")
  papelao1 = loadImage("papelao.png") 
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(66, 128, 215);
  image(img, xlo, ylo, 100, 100)
  image(img2, 0, 255, 300, 170)
  image(img3, 300, 255, 300, 170)
   aleatorio1()
   aleatorio3()
  aleatorio2()
  aleatorio4()
  aleatorio5()
  aleatorio6()
  aleatorio7()
  aleatorio8()
  movimentopr()
 sensorLixeira()
  movimentaLixeira()
 // console.log(certo)
  //console.log(errado)
  fill(color(0, 0))
  strokeWeight(0)
  circle(35, 270, 40)
  circle(110, 270, 40)
  circle(185, 270, 40)
  circle(260, 270, 40)
  circle(335, 270, 40)
  circle(410, 270, 40)
  circle(485, 270, 40)
  circle(560, 270, 40)
  pontuacao()
  image(play, playxx, playyy, playx, playy)
  start0()
  image(win, 130, 60, winl, winh)
  image(lose, 120, 80, losel, loseh)
  ganhou()
  perdeu()
  stoplo()
  pause()
 // pause1()
}
function start0(){
if(playp == false){
  if (dist(mouseX, mouseY, playxx, playyy) < 20 + 100){
  playx = 140
  playy = 140
   playxx = 230
 playyy = 40
  if(plays1 == 0){
    plays.play()
    plays1 = 1
    trilha.pause()
}
  }
  else{
    playx = 100
    playy = 100
     playxx = 250
 playyy = 50
    plays1 = 0
  }
}
}
function mouseClicked(){
  if(dist(mouseX, mouseY, playxx, playy) < 20 + 100){
    trilha.loop()
     playx = 0.1
    playy = 0.1;
    setTimeout(3000);
    playp = true
   comeco = true
     winl = 0.1
    winh = 0.1
    losel = 0.1
    loseh = 0.1
    errado = 0
    certo = 0
  }
}
function movimentaLixeira(){
  if(comeco == true){
  if(keyIsDown(RIGHT_ARROW)){
    xlo += 7
  }
  if(keyIsDown(LEFT_ARROW)){
    xlo -= 7
  }
}
}
function aleatorio1(){
  if(comeco == true){
  if(pr1 == 1){
  image(garrafa, xog, pryg, 50, 50)
    fill(color(0, 0))
    rect(xog + 30, pryg, 10)
 if(dist(xog + 30, pryg, xlo + 50, ylo + 30) < 50 + 10){
  erro.play()
   pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
  if(pr1 == 2){
 image(garrafa1, xog1, pryg1, 50, 50) 
   fill(color(0, 0))
    rect(xog1 + 30, pryg1, 10)
    if(dist(xog1 + 30, pryg1, xlo + 50, ylo + 30) < 50 + 10){
  erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
}
}
}
function aleatorio2(){
  if(comeco == true){
  if(pr1 == 3){
    image(papelao, xopa, prypa, 50, 50)
    fill(color(0, 0))
    rect(xopa + 30, prypa, 10)
    if(dist(xopa + 30, prypa, xlo + 50, ylo + 30) < 50 + 10){
 erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
  if(pr1 == 4){
    image(papelao1, xopa1, prypa1, 50, 50)
   fill(color(0, 0))
    rect(xopa1 + 30, prypa1, 10)
    if(dist(xopa1 + 30, prypa1, xlo + 50, ylo + 30) < 50 + 10){
  erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
}
}
function aleatorio3(){
  if(comeco == true){
  if(pr1 == 5){
    image(lata, xol, pryl, 50, 50)
    fill(color(0, 0))
    rect(xol + 30, pryl, 10)
    if(dist(xol + 30, pryl, xlo + 50, ylo + 30) < 50 + 10){
 erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
  if(pr1 == 6){
    image(lata1, xol1, pryl1, 50, 50)
   fill(color(0, 0))
    rect(xol1 + 30, pryl1, 10)
    if(dist(xol1 + 30, pryl1, xlo + 50, ylo + 30) < 50 + 10){
  erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
}
} 
function aleatorio4(){
  if(comeco == true){
  if(pr1 == 7){
    image(vidro, xov, pryv, 50, 50)
    fill(color(0, 0))
    rect(xov + 30, pryv, 10)
    if(dist(xov + 30, pryv, xlo + 50, ylo + 30) < 50 + 10){
  erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
  if(pr1 == 8){
    image(vidro1, xov1, pryv1, 50, 50)
   fill(color(0, 0))
    rect(xov1 + 30, pryv1, 10)
    if(dist(xov1 + 30, pryv1, xlo + 50, ylo + 30) < 50 + 10){
 erro.play()
      pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  errado += 1;
  pr1 = floor(random(1,16));
  }
  }
}
}

function aleatorio5(){
  if(comeco == true){
if(pr1 == 9){
  image(osso, xoo, pryo, 50, 50)
 fill(color(0, 0))
  circle(xoo + 30, pryo, 10)
  if(dist(xoo + 30, pryo, 35, 270) < 40 + 10){
    erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));
  }
  if(dist(xoo + 30, pryo, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
  }
if(pr1 == 10){
  image(osso1, xoo1, pryo1, 50, 50)
  fill(color(0, 0))
  circle(xoo1 + 30, pryo1, 10)
  if(dist(xoo1 + 30, pryo1, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
  if(dist(xoo1 + 30, pryo1, 335, 270) < 40 + 10){
    erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));
}
}
} 
}
function aleatorio6(){
  if(comeco == true){
if(pr1 == 11){
  image(maca, xom, prym, 50, 50)
  fill(color(0, 0))
  circle(xom + 30, prym, 10)
  if(dist(xom + 30, prym, 110, 270) < 40 + 10){
   erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));
  }
  if(dist(xom + 30, prym, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
}
if(pr1 == 12){
  image(maca1, xom1, prym1, 50, 50)
  fill(color(0, 0))
  rect(xom1 + 30, prym1, 10)
  if(dist(xom1 + 30, prym1, 410, 270) < 40 + 10){
   erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));}
  if(dist(xom1 + 30, prym1, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
}
}
} 
function aleatorio7(){
  if(comeco == true){
if(pr1 == 13){
  image(banana, xob, pryb, 50, 50)
  fill(color(0, 0))
  circle(xob + 30, pryb, 10)
  if(dist(xob + 30, pryb, 185, 270) < 40 + 10){
    erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));
  }
  if(dist(xob + 30, pryb, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
}
if(pr1 == 14){
  image(banana1, xob1, pryb1, 50, 50)
  fill(color(0, 0))
  circle(xob1 + 30, pryb1, 10)
  if(dist(xob1 + 30, pryb1, 485, 270) < 40 + 10){
    erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));}
  if(dist(xob1 + 30, pryb1, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
}
}
}  
function aleatorio8(){
  if(comeco == true){
if(pr1 == 15){
  image(peixe, xop, pryp, 50, 50)
  fill(color(0, 0))
  circle(xop + 30, pryp, 10)
  if(dist(xop + 30, pryp, 260, 270) < 40 + 10){
    erro.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));}
  if(dist(xop + 30, pryp, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
}
if(pr1 == 16){
  image(peixe1, xop1, pryp1, 50, 50)
  fill(color(0, 0))
  circle(xop1 + 30, pryp1, 10)
  if(dist(xop1 + 30, pryp1, 560, 270) < 40 + 10){
    errado.play()
    errado += 1
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
    pr1 = floor(random(1,16));
  }
  if(dist(xop1 + 30, pryp1, xlo + 50, ylo + 30) < 50 + 10){
    acerto.play()
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
    certo += 1;
    pr1 = floor(random(1,16));
  }
}
}
}  
function movimentopr(){
  if(comeco == true){
  if(parametro == 1){
    pryo += 1.5;
    pryo1 += 1.5;
    prym += 1.5;
    prym1 += 1.5;
    pryb += 1.5;
    pryb1 += 1.5;
    pryp += 1.5;
    pryp1 += 1.5;
    pryg += 1.5;
    pryg1 += 1.5;
    prypa += 1.5;
    prypa1 += 1.5;
    pryv += 1.5;
    pryv1 += 1.5;
     pryl += 1.5;
    pryl1 += 1.5;
  }
  if(prym > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(prym1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryb > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  }
  if(pryb1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryp > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryp1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryg > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryg1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(prypa > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(prypa1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryv > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryv1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
     pryl = 5;
    pryl1 = 5;
  }
  if(pryo > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  }
  if(pryo1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  }
  if(pryl > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  }
  if(pryl1 > 270){
    pr1 = floor(random(1,16));
    pryo = 5;
    pryo1 = 5;
    prym = 5;
    prym1 = 5;
    pryb = 5;
    pryb1 = 5;
    pryp = 5;
    pryp1 = 5;
    pryg = 5;
    pryg1 = 5;
    prypa = 5;
    prypa1 = 5;
    pryv = 5;
    pryv1 = 5;
    pryl = 5;
    pryl1 = 5;
  }
}
}
function sensorLixeira(){
  if(comeco == true){
  fill(color(0, 0))
    circle(xlo + 50, ylo + 30, 50)
 strokeWeight(0)
}
}
function pontuacao(){
  if(comeco == true){
textAlign(CENTER)
  textSize(16)
  fill(144, 238, 144)
  rect(150, 10, 40, 20)
  fill(color(255))
  text(certo, 170, 26)
  fill(color(255, 0, 0))
  rect(450, 10, 40, 20)
  fill(255)
  text(errado, 470, 26)
}
}
function ganhou(){
  if(certo == 50){
    comeco = false;
    winh = 200
    winl = 350
    playp = false
  }
}
function perdeu(){
  if(errado == 10){
    comeco = false;
    loseh = 300
   losel = 400
    playp = false
  }
}

function stoplo(){
  if(xlo < 0){
    xlo = 0
  }
  if (xlo > 500){
    xlo = 500
  }
}
function pause(){
  if(comeco == true){
  if(keyIsDown(32)){
    comeco = false
    trilha.pause()
  }
  }  
  if(comeco == false){
    if(keyIsDown(ENTER)){
      comeco = true
      trilha.loop()
    }
  }
}