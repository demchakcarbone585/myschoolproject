function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const colors = ["red", "blue", "green", "yellow"];
  return colors[getRandomInt(colors.length)];
}
