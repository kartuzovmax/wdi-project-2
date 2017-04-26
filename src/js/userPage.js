/* globals fabric  */

$(init);

let canvas;
let j;
function init() {

  $('canvas').click(setBackgroundToCanvas);

  const canvasJson = $('#canvasid').attr('data-canvas-json');
  j = JSON.parse(canvasJson);

  canvas = new fabric.Canvas('canvasid', {
    backgroundSize: 'cover'
  });

  canvas.loadFromJSON(j, function() {
    canvas.renderAll.bind(canvas);
    setTimeout(function(){
      canvas.renderAll.bind(canvas);
    }, 1);
  });
}

function setBackgroundToCanvas() {

  var bgImage = new Image();
  bgImage.onload = function() {
    var fabricImage = new fabric.Image(bgImage);
    canvas.setBackgroundImage(fabricImage);
    canvas.backgroundImage.width = canvas.getWidth();
    canvas.backgroundImage.height = canvas.getHeight();
    canvas.renderAll();
  };
  bgImage.src = 'images/defaultBg.jpg';
}

// canvas.loadFromJSON(json, function() {
//     canvas.renderAll();
// });

// <% var canvasID = `canvas${project._id}` %>
// <canvas id="canvas<%=canvasID%>" width="400" height="400"></canvas>
// <%var canvas = new fabric.Canvas(canvasID, { %>
//   backgroundSize: 'cover'
// <% }); %>
// <% canvas.loadFromJSON(json, function() { %>
//      canvas.renderAll();
// <% }); %>
//  %>
