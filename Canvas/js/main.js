console.log("Hi, Testing Mode!")
context = document.getElementById('canvas').getContext("2d");

/*
// IE Ccompatibility:
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

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging){
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

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

function eraseDraw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    clickDrag = new Array();
    clickX = new Array();
    clickY = new Array();
    console.log("Erased");
}

$('#clearButt').click(function(e){ eraseDraw(); });

$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;      
  paint = true;
  addClick(mouseX, mouseY);
  redraw();
});

$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').mouseup(function(e){ paint = false; });
$('#canvas').mouseleave(function(e){ paint = false; });
