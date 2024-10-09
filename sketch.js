let canvasWidth = 600;
let canvasHeight = 600;

function setup(){
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(230);

    stroke(220, 0, 240);
    strokeWeight(10);
    line(10, 10, 300, 300);

    //stroke("black");
    //strokeWeight(1);
    noFill();
    noStroke();
    square(200, 450, 100);

}