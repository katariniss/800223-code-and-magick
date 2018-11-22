'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_SHIFT = 10;

var GAP = 10;

var CONTENT_LEFT_PADDING = CLOUD_X + GAP;
var CONTENT_TOP_PADDING = CLOUD_Y + 3 * GAP;

var BAR_Y = CONTENT_TOP_PADDING + 5 * GAP;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var BAR_GAP = 50;

var BAR_TEXT_Y = BAR_Y + MAX_BAR_HEIGHT + GAP;

var MY_NAME = 'Вы';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CONTENT_LEFT_PADDING, CONTENT_TOP_PADDING);
  ctx.fillText('Список результатов:', CONTENT_LEFT_PADDING, CONTENT_TOP_PADDING + GAP);

  var maxTime = Math.round(Math.max.apply(null, times));
  for (var i = 0; i < names.length; i++) {
    var nextBarX = CONTENT_LEFT_PADDING + (BAR_WIDTH + BAR_GAP) * i;

    var currentName = names[i];

    var currentColor = currentName === MY_NAME
      ? 'rgba(255, 0, 0, 1)'
      : 'rgba(0, 0, 255, ' + Math.random() + ')';

    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;

    ctx.fillStyle = currentColor;
    ctx.fillRect(nextBarX, BAR_Y + MAX_BAR_HEIGHT - barHeight, BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(currentName, nextBarX, BAR_TEXT_Y);
  }
};
