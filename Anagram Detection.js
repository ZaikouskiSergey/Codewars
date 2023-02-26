var isAnagram = function(test, original) {
    let testCheck = test.toUpperCase().split('').sort().join('')
    let originalCheck = original.toUpperCase().split('').sort().join('')
    return testCheck === originalCheck
  
};
console.log(isAnagram("Buckethead", "DeathCubeK"))