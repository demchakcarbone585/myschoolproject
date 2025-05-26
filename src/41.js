// Example 1: A simple counter function
function countDown() {
    let i = 0;
    while (i > 0) {
        console.log(i);
        i--;
    }
}

countDown();

// Example 2: Countdown with alert box
alert(" countdown start! ");
let i = 10;
while (i > 0) {
    if (i === 5) {
        console.log('Alerted!');
        break;
    }
    console.log(i);
    i--;
}
