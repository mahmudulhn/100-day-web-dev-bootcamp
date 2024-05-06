const greetUser = (greetingPrefix, username = 'user') => {
    console.log(`${greetingPrefix} ${username}`);
};

greetUser('Hi', 'Max');
greetUser('hello');

// function sumUp(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// console.log(sumUp(1, 2));

// function sumUp(numbers) {
//     let result = 0;

//     for (const number of numbers) {
//         result += number;
//     }
//     return result;
// }



function sumUp(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }
    return result;
}

const inputNumber = [1, 2, 8, 9, 7];


console.log(sumUp(...inputNumber));

console.log(sumUp);