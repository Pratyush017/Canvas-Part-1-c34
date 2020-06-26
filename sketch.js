var database;
var drawing = [];
var currentPath = [];

function setup(){
    canvas = createCanvas(displayWidth-30,displayHeight-200);
    database = firebase.database();

    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
}
function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}function endPath(){
    
}
function draw(){
    background("red");

    if(mouseIsPressed) {
        var point = {
            x: mouseX,
            y: mouseY
        }
        currentPath.push(point);
    }
    noFill("white");
    stroke("white");
    strokeWeight(1);
    
    for(var i = 0; i< drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for(var p = 0; p< path.length; p++){
            vertex(path[p].x, path[p].y);
        }
        endShape();
    }
    
}