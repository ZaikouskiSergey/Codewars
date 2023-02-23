function roundToNext5(n){
    if (n % 5 === 0){
        return n
    }
    return n>0 ? (Math.trunc(n / 5) +1) * 5 : (Math.trunc(n / 5)) * 5
}
console.log(roundToNext5(-6)) 