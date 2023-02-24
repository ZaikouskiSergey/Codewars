/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/
function stray(numbers) {
    let numbersSort = numbers.sort((a,b) => a-b)
    return numbersSort[0] === numbersSort[1] ? numbersSort[numbersSort.length -1] : numbersSort[0]
}
  
console.log(stray([2, 1, 1]))