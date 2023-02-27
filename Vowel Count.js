function getCount(str) {
   let result= str.match(/[aeiou]/gi);
   return result ? result.length : 0
  }
  console.log(getCount('my math'))