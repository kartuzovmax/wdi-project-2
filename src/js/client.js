/* globals fabric */

console.log('hello world');

$(init);

var canvas;

function init() {

  $('canvas').click(changeCanvasBackground);
  $('#bgApplyButton').click(setCanvasBackground);
  $('#saveButton').click(convertToImage);

  // Creating a canvas using Fabric.js
  loadCanvas();


  // canvas.setBackgroundImage('images/defaultBg.jpg');
  // canvas.renderAll();
  // canvas.renderTop();
  //loadCanvas();

  // Setting a default canvas background
  //canvas.style.background = `url('images/defaultBg.jpg')`;
  //canvas.style.backgroundSize = 'cover';
  //context = canvas.getContext('2d');
}

function loadCanvas() {
  canvas = new fabric.Canvas('canvas', {
    backgroundSize: 'cover'
  });
  var bgImage = new Image();
  bgImage.setAttribute('crossOrigin', 'anonymous');
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

function setCanvasBackground() {
  // console.log('setting background');
  // console.log('link is ' + $('#bgSearch').val());
  // $('canvas').css('background-image', 'url(' + $('#bgSearch').val() + ')');
  // $('canvas').css('background-size', 'cover');

  // makeBase();
  //
  // function makeBase() {
  //   var baseImage = new Image();
  //   baseImage.class = 'resize-drag';
  //   baseImage.src = $('#bgSearch').val();
  //   baseImage.onload = function(){
  //     context.drawImage(baseImage, 0, 0);
  //   };
  // }
  fabric.Image.fromURL($('#bgSearch').val(), function(oImg) {
    $(oImg).attr('crossOrigin', 'anonymous');
    canvas.add(oImg);
    canvas.renderAll();
  });
}

function convertToImage() {
  canvas.deactivateAll().renderAll();
  window.open(canvas.toDataURL('png'));
}
