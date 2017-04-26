/* globals fabric  */

$(init);

var canvas;

function init() {

  $('#addStickerButton').click(addStickerToCanvas);
  $('#saveButton').click(convertToImage);
  $('#saveProjectButton').click(saveProject);
  $('#deleteStickerButton').click(deleteSticker);

  // Creating a canvas using Fabric.js
  loadCanvas();
}

function loadCanvas() {

  canvas = new fabric.Canvas('canvas', {
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
    canvas.renderAll();
  };
  bgImage.src = 'images/defaultBg.jpg';
}

function addStickerToCanvas() {

  fabric.Image.fromURL($('#bgSearch').val(), function(oImg) {
    $(oImg).attr('crossOrigin', 'Anonymous');
    //addStickerToArray($('#bgSearch').val()); // adding sticker to the array
    $('#bgSearch').val(''); // clearing the text field
    oImg.on('selected', selectSticker);
    canvas.add(oImg);
    canvas.renderAll();
  },{crossOrigin: 'Anonymous'});
}

function convertToImage() {
  canvas.deactivateAll().renderAll();
  window.open(canvas.toDataURL('png'));
}

function selectSticker() {
  console.log('Selected sticker!');

}

function deleteSticker() {
  console.log('Delete sticker: ' + canvas.getActiveObject());
  canvas.getActiveObject().remove();
}

function saveProject() {

  // for (let i = 0; i < canvas.getObjects().length; i++) {
  //   const newImg = canvas.item(i);
  //   console.log(newImg);
  // }

  // Data is ready
  const imagesObject = JSON.stringify(canvas.toJSON());
  console.log(imagesObject);
  const projectTitle = $('#projectTitle').val();
  const canWidth = canvas.getWidth();
  const canHeight = canvas.getHeight();

  var data = {};
  data.title = projectTitle;
  data.canvasObject = imagesObject;
  data.canvasWidth = canWidth;
  data.canvasHeight = canHeight;

  $.ajax({
    type: 'POST',
    data: data,
    url: '/projects'
  })
  .done(data => {
    //console.log(data);
  })
  .fail(data => {
    //console.log(data);
  });

}
