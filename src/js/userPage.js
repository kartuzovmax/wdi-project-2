/* globals fabric  */

$(init);

let canvas;
let j, projectsData;
function init() {

  const canvasJson = $('#canvasid').attr('data-canvas-json');
  projectsData = $('#head').attr('data-user-projects');

  j = JSON.parse(canvasJson);
  console.log(projectsData);

  canvas = new fabric.Canvas('canvasid', {
    backgroundSize: 'cover'
  });

  canvas.loadFromJSON(j, function() {
    canvas.renderAll.bind(canvas);
    canvas.deactivateAll();
    canvas.renderAll();
    canvas.forEachObject(function(object){
      object.selectable = false;
    });
  });
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
