function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Example usage:
let randomNumber = getRandomInt(10);
console.log(randomNumber); // Output: a random integer between 0 and 9

function calculateArea(radius, height) {
  return radius * radius * height;
}

function drawCircle(centerX, centerY, radius, fillColor, fillColorBorder) {
  let canvas = document.createElement("canvas");
  canvas.width = radius * 2 + 16;
  canvas.height = radius * 2 + 16;
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = fillColor;
  ctx.fillRect(0, 0, radius * 2 + 16, radius * 2 + 16);
  ctx.fillOval(centerX - radius / 4, centerY - radius / 4, radius / 2);

  if (fillColorBorder) {
    let canvasBorder = document.createElement("canvas");
    canvasBorder.width = radius * 2 + 16;
    canvasBorder.height = radius * 2 + 16;
    let ctxBorder = canvasBorder.getContext("2d");

    ctxBorder.fillStyle = fillColorBorder;
    ctxBorder.fillRect(0, 0, radius * 2 + 16, radius * 2 + 16);
    ctxBorder.fillOval(centerX - radius / 4, centerY - radius / 4, radius / 2);
  }

  return canvas;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
