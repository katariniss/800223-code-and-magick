// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.fillStyle = 'blue';
// ctx.fillRect(0, 0, 300, 150);
// ctx.fillRect(210, 0, 30, 30);

// ctx.font = '30px Tahoma';
// ctx.textBaseline = 'hanging';
// ctx.fillText('Привет', 0, 10);

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_SHIFT = 10;

var GAP = 10;

var CONTENT_LEFT_PADDING = CLOUD_X + GAP;
var CONTENT_TOP_PADDING = CLOUD_Y + 3 * GAP;

var BAR_Y = CONTENT_TOP_PADDING + 3 * GAP;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var BAR_TEXT_Y = 250;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = "16px PT Mono";
  ctx.fillStyle = "black";
  ctx.textBaseline="hanging";
  ctx.fillText("Ура вы победили!", CONTENT_LEFT_PADDING, CONTENT_TOP_PADDING);
  ctx.fillText("Список результатов:", CONTENT_LEFT_PADDING, CONTENT_TOP_PADDING + GAP);

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CONTENT_LEFT_PADDING, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', CONTENT_LEFT_PADDING, BAR_TEXT_Y);

  var firstBarX = CLOUD_X + BAR_WIDTH + BAR_GAP;
  ctx.fillText('Иван', firstBarX, BAR_TEXT_Y);
  ctx.fillStyle = 'blue';
  ctx.fillRect(firstBarX, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  var secondBarX = firstBarX + BAR_WIDTH + BAR_GAP;
  ctx.fillStyle = '#000';
  ctx.fillText('Юлия', secondBarX, BAR_TEXT_Y);
  ctx.fillStyle = 'blue';
  ctx.fillRect(secondBarX, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

  var thirdBarX = secondBarX + BAR_WIDTH + BAR_GAP;
  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', thirdBarX, BAR_TEXT_Y);
  ctx.fillStyle = 'blue';
  ctx.fillRect(thirdBarX, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
};
