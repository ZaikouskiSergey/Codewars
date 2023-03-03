function smallEnough(a, limit){
    let count = a.filter(value => value > limit)

    return count.length > 0 ? false : true 

}
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))

/*
function smallEnough(a, limit){
  return Math.max(...a) <= limit
}
*/