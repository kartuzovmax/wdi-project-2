console.log('hello world');

$(init);

function init() {

  $('canvas').click(changeCanvasBackground);
  $('#bgApplyButton').click(setCanvasBackground);
}

function changeCanvasBackground() {
  console.log('changing background');
  $('canvas').css('background-color', 'red');
}

function setCanvasBackground() {
  console.log('setting background');
  console.log('link is ' + $('#bgSearch').val());
  $('canvas').css('background-image', 'url(' + $('#bgSearch').val() + ')');
  $('canvas').css('background-size', 'cover');
}
