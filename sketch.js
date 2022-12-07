function setup() {
    createCanvas(1920, 1280);
}

  
function linesRandom(){
    background(500, 10)
    cores= [("#ff5533"), ("#0055ff"), ("#c4e87d")]
    stroke(random(cores));
    line(random(width), random(height), random(width), random(height))
    strokeWeight(10);
    
  }


function linesMouse(){
    if(movedX && movedY){
        cores= [("#ff5533"), ("#0055ff"), ("#c4e87d")]
        stroke(random(cores));
        line(random(width), random(height), random(width), random(height))
        strokeWeight(10);
        background(500, 10)
    }
}

function words(){
  cores= [("#ff5533"), ("#0055ff"), ("#c4e87d")]
  palavras= [("tramar"), ("narrar"), ("contar"), ("criar"), ("expressar"), ("descobrir")]
  
  fill(random(cores));
  textFont("Lokeya Alternate");
  textSize(100);
  text(random(palavras), random(width), random(height));
  background(1000, 10)

}


function title(){
    fill("#000000");
    textFont("Raleway");
    textSize(100);  
    text("O que é a Trama?", 460, 400)
    textSize(25);  
    text("(Mova ou clique com o mouse para descobrir)", 580, 440)

}

function wordsPressed(){
  cores= [("#ff5533"), ("#0055ff"), ("#c4e87d")]
  palavras= [("tramar"), ("narrar"), ("contar"), ("criar"), ("expressar"), ("descobrir")]

  title()

  fill(random(cores));
  textFont("Lokeya Alternate");
  textSize(100);

  if(movedX){
    text(random(palavras), random(height), random(width));
  }else if(mouseIsPressed){
    text(random(palavras), random(height), random(width));
  }

  background(1000, 50)

}



function desafio(){
 
  let desafios = [("demônio"), ("fada"), ("motoserra"), ("borboleta"), ("lanterna")]

  fill("#000000");
  textFont("Lokeya Alternate");
  textSize(100);  
  text("Venha Tramar", 800, 200)
  
  textFont("Raleway")
  textSize(25); 
  text("Nosso desafio está lançado: Desenhe uma fada usando o mouse em apenas uma linha", 600, 250)



}


function desenhar(){

  desafio()
  
  if(movedX, movedY){
    line(mouseX, mouseY, pmouseX, pmouseY)
    stroke("#ff5533");
    strokeWeight(5)
  }

  if(keyIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY)
    stroke("#0055ff");
    strokeWeight(5)
  }

}

function arte(){


  textSize(125);  

  fill("#0055ff")
  textFont("Raleway");
  text("arte", 200, 400)

  fill("#ff5533")
  textFont("Lokeya Alternate");
  text("existe", random(width), 500)
  background(1000, 50)

  fill("#0055ff")
  textFont("Raleway");
  text("porque", 200, 600)
  
  fill("#ff5533")
  textFont("Lokeya Alternate");
  text("a vida", random(width), 700)
  background(1000, 50)

  fill("#0055ff")
  textFont("Raleway");
  text("não basta", 200, 800)
}

function back(){
  cores= [("#ff5533"), ("#0055ff"), ("#c4e87d")]

  background(("#ff5533"))

}

function check(){
  
  

  
}

function draw() {
  
  for(let i=0; i<6;){
    if(i<1){
      setTimeout(arte(), 1000*10)
      i=i+1
    }
    if(i>1 && i<2){
      setTimeout(linesRandom(), 1000*10)
      i=i+1
    }
  }
  

}