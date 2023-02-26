function reverseLetter(str) {  
    let regexp = /[a-z]/gi;
    return str.match(regexp).reverse().join('')
    
  }
  console.log(reverseLetter("u332ltr53o?n"))