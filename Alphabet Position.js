function alphabetPosition(text) {
    let letters = text.toLowerCase().match(/[a-z]/gi)
    
    if (letters) {
    return letters.map(value => value.charCodeAt(0)-96).join(' ');
    } else {
        return ''
    }
}
  console.log(alphabetPosition("^|+-<*+$"))