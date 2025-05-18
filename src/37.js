function get_random_number() {
  const numbers = [1, 2, 3, 4, 5];
  const random_number = Math.floor(Math.random() * (numbers.length - 1)) + 0;
  return numbers[random_number];
}

function add_numbers(num1, num2) {
  return num1 + num2;
}
