/*Count the number of Duplicates
Write a function that will return the count of 
distinct case-insensitive alphabetic characters 
and numeric digits that occur more than once in the 
input string. The input string can be assumed to contain 
only alphabets (both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text){
    let textCase = text.toLowerCase()
    let textArray = textCase.split('')
    let count=[]
    textArray.forEach((value) =>{
        let countLetter = textArray.filter((el)=> el===value)
        if(countLetter.length > 1 && !count.includes(value)) {
            count.push(value)}
    })
    return count.length
  }
  console.log(duplicateCount("Indivisibilities"))