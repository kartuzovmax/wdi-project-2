/* globals fabric  */

$(init);

//let canvas;
let j, projectsData;

function init() {

  if(!$('.profilePicture')) return;

  projectsData = $('#head').attr('data-user-projects');
  $('.downloadLink').on('click', download);

  console.log(projectsData);

  $('.thumbnailCanvas').each(function(i, obj) {
    //test
    const uniqID = `#canvas${i}`;
    $(obj).attr('id',uniqID);
    const canvasJson = $(obj).attr('data-canvas-json');
    j = JSON.parse(canvasJson);
    console.log('CANVAS ' + i);

    const canvas = new fabric.StaticCanvas(uniqID, {
      backgroundSize: 'cover'
    });

    canvas.loadFromJSON(j, function() {
      canvas.renderAll.bind(canvas);
    });

  });
}

function download() {
  console.log($(this).attr('data-project-canvas'));
  // canvas.deactivateAll().renderAll();
  const canvas = new fabric.StaticCanvas('canvas', {

  });

  canvas.loadFromJSON($(this).attr('data-project-canvas'), function() {
    canvas.renderAll.bind(canvas);
    window.open(canvas.toDataURL('png'));
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
