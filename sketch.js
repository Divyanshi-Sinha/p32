var canvas, backgroundImage,bg;

var questions;

var question, contestant, quiz;

function preload(){
  backgroundImage = loadImage("./assets/background.png");
  bg = loadImage("../assets/q img.jpg");
}
function setup(){
  canvas = createCanvas(1500,650);
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(backgroundImage);

}
