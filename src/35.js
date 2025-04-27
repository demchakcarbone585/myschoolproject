function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("randomButton").onclick = function () {
    var randomNumber = getRandomInt(0, 100); // Generate a random number between 0 and 100
    alert(randomNumber); // Display the generated number
};
