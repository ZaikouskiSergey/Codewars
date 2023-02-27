/*function factorial(n)
{
  if (n<0 || n > 12){
    throw new RangeError 
  }
  let result=1;
  for (let i=1; i <=n; i++){
    result = result * i
  }
  return result
}*/
// 
function factorial(n)
{
  if (n<0 || n > 12){
    throw new RangeError 
  }

  return n < 2 ? 1 : n * factorial(n-1)
}
console.log(factorial(5))