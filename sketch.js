let array = [];
let backgroundColor = 200;
let noiseOffset= 0.0;
let strokeWidth=5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20,200,100);

drawGrid();
// strokeWeight(5);
// noFill();

}

function draw() {
  background(20,200,100,10);
  strokeWeight(strokeWidth);

noiseOffset+= 0.09;
strokeWidth= noise(noiseOffset) * 70;

  if (mouseIsPressed) {
    stroke(map(mouseX, 59, 200, 150, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // backgroundColor-=5;
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {
  console.log(`key ${key} is being typed`)

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    clear();
    //display image
//     background(255);
// beginShape();
//     for (let i = 0; i < array.length; i++) {
//       // line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
//       curveVertex(array[i][0], array[i][1]);
// endShape();
//     }
  }
  return false;
}

// function mousePressed(){
// array=[];
// backgroundColor=255;
//
// }

function drawGrid(){
  numCells=20;
  fillColor=255;
  noStroke();
  strokeWeight(0);
for (let i=0;i<= width; i +=width/numCells){
  for(let j = 0; j<=height; j+= height/numCells){
    if(fillColor===255){
      fillColor=200
    }else{
      fillColor=255
    }
    fill(fillColor)
  rect(i,j,width/numCells, height/numCells);
}
}
strokeWeight(5)
}
