var canvasBlock = document.getElementById('myСanvas');
var ctx = canvasBlock.getContext('2d');

canvasBlock.width = 520;
canvasBlock.height= 520;

ctx.strokeStyle = '#b8b8b8';
ctx.fillStyle = '#000000';

/* Добавляет обводку и поле шахматной доски */
ctx.lineWidth = 10;

var startPointX = ctx.lineWidth / 2;
var startPointY = ctx.lineWidth / 2;
var fillWidth = canvasBlock.width - ctx.lineWidth;
var fillHeight = canvasBlock.width - ctx.lineWidth;

ctx.strokeRect(startPointX, startPointY, fillWidth, fillHeight);
ctx.fillRect(startPointX, startPointY, fillWidth, fillHeight);

/* Объявляет нужные переменные для шахматной доски */
var chessBlockWidth = fillWidth / 8;
var chessBlockHeight = fillHeight / 8;

var chessOffsetPointX = chessBlockWidth;
var chessOffsetPointY = chessBlockHeight;

/* Рисует шахматную доску на канвасе */
for (var i = 0; i < 8; i += 2) {
  for (var j = 0; j < 8; j += 2) {
    ctx.clearRect(startPointX + i * chessOffsetPointX, startPointY + j * chessOffsetPointY, chessBlockWidth, chessBlockHeight);
    ctx.clearRect(startPointX + (i + 1) * chessOffsetPointX, startPointY + (j + 1) * chessOffsetPointY, chessBlockWidth, chessBlockHeight);
  }
}
