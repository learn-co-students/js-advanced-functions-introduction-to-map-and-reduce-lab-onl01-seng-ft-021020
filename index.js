// Your code here
function mapToNegativize(sarray) {
  let result = []
  for (let i = 0; i < sarray.length; i++ ) {
    result.push(-1 * sarray[i])
  }
  return result
}

function mapToNoChange(sarray) {
  let result = []
  for (let i = 0; i < sarray.length; i++ ) {
    result.push(sarray[i])
  }
  return result
}

function mapToDouble(sarray){
  let result = []
  for (let i = 0; i < sarray.length; i++){
    result.push(2 * sarray[i])
  }
  return result
}

function mapToSquare(sarray){
  let result = []
  for (let i = 0; i <sarray.length; i++){
    result.push(sarray[i] * sarray[i])
  }
  return result
}

function reduceToTotal(sarray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sarray.length; i++ ) {
    total = total + sarray[i]
  }
  return total
}

function reduceToAllTrue(sarray) {
  for (let i = 0; i < sarray.length; i++ ) {
    if (!sarray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sarray) {
  for (let i = 0; i < sarray.length; i++ ) {
    if (sarray[i]) return true
  }
  return false
}
