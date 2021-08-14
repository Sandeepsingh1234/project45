var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var bur_img,ice_img,pep_img,piz_img,dun_img
var boy,girl
var junks,junksGroup
function preload(){
  back_img = loadImage("images/bg.jpg");
 
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  piz_img=loadImage("images/piz.png")
 bur_img=loadImage("images/bur.png")
 ice_img=loadImage("images/ice.png")
 pep_img=loadImage("images/pep.png")
dun_img=loadImage("images/dun.png")
gir_img=loadImage("images/gir.png")
boy_img=loadImage("images/boy.png")
bg2_img=loadImage("images/healthy.jpg")
  fruit5_img = loadImage("images/pineapple2.png");

  fruitGroup = new Group();
  junksGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(bg2_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
