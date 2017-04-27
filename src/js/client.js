/* globals fabric swal  */

$(init);

var canvas;
var $buttonsPanel, $toolsPanel;
let j, projectsData;

function init() {


  $('#addStickerButton').click(addStickerToCanvas);
  $('#saveButton').click(convertToImage);
  $('#saveProjectButton').click(saveProject);
  $('#saveChangesButton').click(saveChanges);
  $('#deleteStickerButton').click(deleteSticker);
  $('#layerDownButton').click(layerDown);
  $('#layerUpButton').click(layerUp);
  $('#cloneButton').click(cloneSticker);

  // Creating a canvas using Fabric.js
  loadCanvas();
  $buttonsPanel = $('.buttonsPanel');
  $toolsPanel = $('.toolsPanel');

  $toolsPanel.toggle();
}

function loadCanvas() {

  // Checking if we need to load a canvas or just create a new one
  if (document.getElementById('editHeader')) {

    // Project already exists
    projectsData = $('#editHeader').attr('data-project-canvas');
    j = JSON.parse(projectsData);

    canvas = new fabric.Canvas('mainCanvas', {
      backgroundSize: 'cover'
    });

    canvas.loadFromJSON(j, function() {
      canvas.renderAll.bind(canvas);
      canvas.deactivateAll();
      canvas.renderAll();
    });

    const title = $('#editHeader').attr('data-project-title');
    $('#projectTitleInput').val(title);

  } else {

    // We are creating new project
    canvas = new fabric.Canvas('mainCanvas', {
      backgroundSize: 'cover'
    });

    var bgImage = new Image();
    bgImage.setAttribute('crossOrigin', 'Anonymous');
    bgImage.onload = function() {
      // this is syncronous
      var fabricImage = new fabric.Image(bgImage);
      canvas.setBackgroundImage(fabricImage);
      canvas.backgroundImage.width = canvas.getWidth();
      canvas.backgroundImage.height = canvas.getHeight();

      // Customizing selector
      canvas.selectionColor = 'rgba(72,216,160,0.3)';
      canvas.selectionBorderColor = 'rgba(72,216,160,1.0)';
      canvas.selectionLineWidth = 2.5;

      canvas.renderAll();
    };
    bgImage.src = '/../images/defaultBg.jpg';
  }

}

function addStickerToCanvas() {

  fabric.Image.fromURL($('#bgSearch').val(), function(oImg) {
    $(oImg).attr('crossOrigin', 'Anonymous');
    //addStickerToArray($('#bgSearch').val()); // adding sticker to the array
    $('#bgSearch').val(''); // clearing the text field

    oImg.on('selected', selectSticker);
    oImg.on('deselected', deselectSticker);
    canvas.add(oImg);
    oImg.set({
      borderColor: '#48d8a0',
      cornerColor: '#48d8a0',
      cornerSize: 12,
      transparentCorners: false
    });
    canvas.renderAll();
  },{crossOrigin: 'Anonymous'});
}

function convertToImage() {
  canvas.deactivateAll().renderAll();
  window.open(canvas.toDataURL('png'));
}

function selectSticker() {
  console.log('Selected sticker!');
  $buttonsPanel.toggle();
  $toolsPanel.toggle();
}

function deselectSticker() {
  console.log('Deselect sticker!');
  $buttonsPanel.toggle();
  $toolsPanel.toggle();
}

function deleteSticker() {
  console.log('Delete sticker: ' + canvas.getActiveObject());
  canvas.getActiveObject().remove();
}
function layerUp() {
  canvas.bringForward(canvas.getActiveObject());
  canvas.renderAll();
}
function layerDown() {
  canvas.sendBackwards(canvas.getActiveObject());
  canvas.renderAll();
}

function cloneSticker() {
  var object = fabric.util.object.clone(canvas.getActiveObject());
  object.set('top', object.top+20);
  object.set('left', object.left+20);
  canvas.add(object);
}

function saveProject() {

  // Data is ready
  const imagesObject = JSON.stringify(canvas.toJSON());
  const projectTitle = $('#projectTitleInput').val();
  const canWidth = canvas.getWidth();
  const canHeight = canvas.getHeight();

  var data = {};
  data.title = projectTitle;
  data.canvasObject = imagesObject;
  data.canvasWidth = canWidth;
  data.canvasHeight = canHeight;

  console.log(`{Trying to save data: ${data}}`);

  $.ajax({
    type: 'POST',
    data: data,
    url: '/projects'
  })
  .done(data => {
    console.log('SUCCESS', data);
    swal('Success!', 'Project was saved to your profile :)', 'success');
  })
  .fail(data => {
    console.log('Fail', data);
  });

}

function saveChanges() {
  console.log('Save changes!');

  // Data is ready
  const imagesObject = JSON.stringify(canvas.toJSON());
  const projectTitle = $('#projectTitleInput').val();
  const canWidth = canvas.getWidth();
  const canHeight = canvas.getHeight();

  var data = {};
  data.title = projectTitle;
  data.canvasObject = imagesObject;
  data.canvasWidth = canWidth;
  data.canvasHeight = canHeight;

  console.log(`{Trying to save data: ${data}}`);

  $.ajax({
    type: 'POST',
    data: data,
    url: '/projects'
  })
  .done(data => {
    console.log('SUCCESS', data);
    swal('Success!', 'Project was saved to your profile :)', 'success');
  })
  .fail(data => {
    console.log('Fail', data);
  });
}
