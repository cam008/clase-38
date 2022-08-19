var playerCount = 0
var gameState = 0
var distance = 0
var allPlayers 
var fondo
var database
var juego1
var jugador1
var formulario1

function preload(){
  fondo = loadImage("../imagenes/background.png")
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  database = firebase.database()
  juego1 = new juego()
  juego1.getState()
  juego1.start()
}

function draw(){
  background(fondo);
  if (playerCount === 2){
    juego1.update(1)
  }

  if(gameState === 1){
    juego1.play()
  }
    
  
}



