console.log("Hi, Testing Mode!")

// Global Variables (Canvas)
const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.75;
canvas.height = window.innerHeight * 0.75;

// IE Ccompatibility (Unused):
/*
var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");
*/

// Important Variables
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

// Arrays with Coordinates and Drawing
function addClick(x, y, dragging){
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

// Re-Draw all the lines and dots for every new line or dot
function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 3;   
    for(var i=0; i < clickX.length; i++) {		
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
    }
}

// Clear Canvas
function eraseDraw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    clickDrag = new Array();
    clickX = new Array();
    clickY = new Array();
    console.log("Erased");
}

// Button for Clear Canvas
$('#clearButt').click(function(e){ eraseDraw(); });

// When Holds Mouse's Click on the Canvas 
$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;      
  paint = true;
  addClick(mouseX, mouseY);
  redraw();
});

// When the Mouse is moved on the Canvas
$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

// When releases Mouse's Click on the Canvas or the Mouse Leaves Canvas Zone
$('#canvas').mouseup(function(e){ paint = false; });
$('#canvas').mouseleave(function(e){ paint = false; });
