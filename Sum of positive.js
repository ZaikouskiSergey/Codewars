function positiveSum(arr) {
    let result = 0;
    arr.forEach(value => value > 0? result+=value:null)
                
  return result;
    
  }