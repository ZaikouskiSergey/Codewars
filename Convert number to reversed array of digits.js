/*Convert number to reversed array of digits*/
function digitize(n) {
    return n.toString().split('').reverse().map(a=>Number(a))
  }
  console.log(digitize(12354))