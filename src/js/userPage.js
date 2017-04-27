/* globals fabric  */

$(init);

let canvas;
let j, projectsData;

function init() {

  projectsData = $('#head').attr('data-user-projects');

  console.log(projectsData);

  $('.thumbnailCanvas').each(function(i, obj) {
    //test
    const uniqID = `#canvas${i}`;
    $(obj).attr('id',uniqID);
    const canvasJson = $(obj).attr('data-canvas-json');
    j = JSON.parse(canvasJson);
    console.log('CANVAS ' + i);

    canvas = new fabric.StaticCanvas(uniqID, {
      backgroundSize: 'cover'
    });

    canvas.loadFromJSON(j, function() {
      canvas.renderAll.bind(canvas);
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
