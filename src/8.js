function myschoolproject() {
  const numbers = [1,2,3,4,5];
  const colors = ["red", "blue", "green"];
  const fruits = ["apple", "banana", "orange"];
  const animals = ["dog", "cat", "bird"];
  
  const randomNumber = Math.floor(Math.random() * numbers.length);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  
  return `You rolled a ${randomNumber}, your favorite color is ${randomColor}, your favorite fruit is ${randomFruit} and your favorite animal is ${randomAnimal}.`;
}
