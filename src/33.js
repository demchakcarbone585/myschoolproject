let student = {
  name: 'John Doe',
  age: 18,
  grades: [65, 70, 68],
  isStudent: true,
  aboutMe: function () {
    console.log('Hello! I am a student named ' + this.name);
    return `${this.name} was born in ${this.age}.`;
  }
};

// Add more methods as needed
