
let canvasWidth = 1200;
let canvasHeight = 640;

let brickX = 100;
let brickY = 100;
let brickWidth = 100;
let brickHeight = 40;
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(200);
    fill(255, 0, 0);
    let yPos = brickY;
    createBrickGrid(brickX, yPos, brickWidth, brickHeight,10, "brown",1);
}
function createBrickGrid(x, yPos, brickWidth, brickHeight,count, color, gap){
    for (let i = 0; i < count; i++) {
        let xPos = x;
        createBrickRows(xPos, yPos, brickWidth, brickHeight, count, color,gap);
        console.log("Y Position : "+yPos);
        yPos = yPos + brickHeight + gap;
    }
}
function createBrickRows(xPos,yPos,width,height,count,color,gap){
    let xVal = xPos;
    for (let i = 0; i < count; i++) {
        fill(color);
        createBrick(xVal,yPos,width,height);
        xVal = xVal + width + 1 + gap;
    }
}
function createBrick(xPos,yPos,width,height){
    rect(xPos, yPos, width, height);
}