var capitals = function (word) {
	let wordArray = word.split('')
    let result = wordArray.map((value, index) => {
        if(value === value.toUpperCase()){
            return index
        } 
    })
    return result.filter(value => value!==undefined)
};
console.log(capitals('CodEWaRs'))