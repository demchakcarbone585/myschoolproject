function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateBMI(heightInMeters, weightKilos) {
  const bmi = weightKilos / ((heightInMeters / 100) ** 2);
  return `${bmi.toFixed(2)}`;
}

function displayMenu(options) {
  let menuDiv = document.getElementById("menu");
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.textContent = options[i];
    if (i === 0) {
      option.setAttribute("selected", "selected");
    }
    menuDiv.appendChild(option);
  }
}

function mainPage() {
  // Your code for the main page goes here
}
