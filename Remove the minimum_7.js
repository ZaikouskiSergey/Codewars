/*Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.*/
function removeSmallest(numbers) {
    let minElem= Math.min(...numbers);
    let numberMin = numbers.findIndex(value => value===minElem)
    let newArray = numbers.slice()
    newArray.splice(numberMin,1);
    return newArray
  }
  console.log(removeSmallest([5,3,2,1,4]))