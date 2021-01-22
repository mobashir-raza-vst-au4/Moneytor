const numbers = [1 , 21, 21, 34 ,12 ,34 ,12];
const removeRepeatNumbers = array => [... new Set(array)]
console.log(removeRepeatNumbers(numbers))