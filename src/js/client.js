/* globals fabric saveAs */

console.log('hello world');

$(init);

var canvas;

function init() {

  $('canvas').click(changeCanvasBackground);
  $('#addStickerButton').click(addStickerToCanvas);
  $('#saveButton').click(convertToImage);

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

function changeCanvasBackground() {
  console.log('changing background');
  $('canvas').css('background-color', 'red');

}

function addStickerToCanvas() {

  fabric.Image.fromURL($('#bgSearch').val(), function(oImg) {
    $(oImg).attr('crossOrigin', 'Anonymous');
    $('#bgSearch').val(''); // clearing the text field
    oImg.on('selected', selectSticker);
    canvas.add(oImg);
    canvas.renderAll();
  },{crossOrigin: 'Anonymous'});
}

function convertToImage() {
  canvas.deactivateAll().renderAll();
  window.open(canvas.toDataURL('png'));
  // $(canvas).get(0).toBlob(function(blob) {
  //   saveAs(blob, 'myIMG.png');
  // });
}

function selectSticker() {
  console.log('Selected sticker!');
}
