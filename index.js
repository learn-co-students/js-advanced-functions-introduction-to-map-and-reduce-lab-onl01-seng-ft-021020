function mapToNegativize(arr) {
  let mapArr = []
  arr.forEach( el => mapArr.push(el * -1) )
  return mapArr
}

function mapToNoChange(arr) {
  return Object.assign([], arr)  
}

function mapToDouble(arr) {
  let mapArr = []
  arr.forEach( el => mapArr.push(el * 2) )
  return mapArr
}

function mapToSquare(arr) {
  let mapArr = []
  arr.forEach( el => mapArr.push(el ** 2) )
  return mapArr
}

function reduceToTotal(arr, start = 0) {
  let total = start 
  arr.forEach( el => total += el )
  return total
}

function reduceToAllTrue(arr) {
  let bool = true
  arr.forEach( el => bool = bool && !!el)
  return bool
}

function reduceToAnyTrue(arr) {
  let bool = false
  arr.forEach( el => bool = bool || !!el )
  return bool
}
