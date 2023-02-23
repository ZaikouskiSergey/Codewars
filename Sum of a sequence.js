const sequenceSum = (begin, end, step) => {
    if (end < begin) {return 0} 
    let sum = 0
    for (let i = begin; i <= end; i+=step){
      sum +=i
    }
    return sum
  };