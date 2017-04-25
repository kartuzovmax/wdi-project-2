/* globals fabric  */

$(init);

function init() {

  const $userName = $('#head').attr('data-user-name');
  const $userProjects = $('#head').attr('data-user-projects');
  console.log(`USERNAME IS ${$userName}, AND PROJECTS ARE ${$userProjects}`);
  const $objectsArr = $userProjects.split(',');
  console.log(`ObjectsArr length is ${$objectsArr.length}`);
  const canvasJson = $('canvas').attr('data-canvas-json');
  const canvas = new fabric.Canvas('canvas', {
    backgroundSize: 'cover'
  });
  canvas.loadFromJSON(canvasJson, function() {
    canvas.renderAll.bind(canvas);
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
