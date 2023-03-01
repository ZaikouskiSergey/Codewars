function checkExam(array1, array2) {
    let mark=0;
    for(let i =0; i<array1.length; i++){
        if(array1[i] === array2[i]){
            mark +=4
        } else if (array1[i] !== array2[i] && array2[i] !==''){
            mark -=1
        }
    }
    return mark<0 ? 0: mark
   }
   console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))