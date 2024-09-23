let numbers= [5, 10, 15, 20, 25, 30]
console.log(number[0])

for(let i=0; i < number.length, i++;) {
    console.log(number[i]);
}


numbers.pop();

console.log(numbers) // [5, 10, 15, 20, 25]

let removedNumbers = numbers.splice (1, 2) //[5, 10?, 25]





/*let sum = 0;
for (let i=0; i < number.length; i++) {
    sum += numbers[i];
}
console.log("sum:", sum)

let max = number[0];
for (let i = 1; i < number.length; i++) {
    if (number[i] > max){
        max = numbers[i];
    }
}
console.log("max:", max)

let totalsum = 0;

function calculateAverage (number) {
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        sum += numbers[i];
    }
    return sum / number.length;
}
console.log()