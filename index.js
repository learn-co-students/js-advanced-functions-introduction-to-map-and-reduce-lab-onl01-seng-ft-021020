const mapToNegativize = function(sourceArray) {
  return sourceArray.map(i => i * -1); //ES6 arrow functions
}

const mapToNoChange = function(sourceArray) {
  let x = []
  for (let i =0; i < sourceArray.length; i++) {
    x.push(sourceArray[i])
  }
  return x
}

const mapToDouble = function(sourceArray) {
  return sourceArray.map(i => i * 2);
}

const mapToSquare = function(sourceArray) {
  return sourceArray.map(i => i ** 2);
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++ ) {
    total = total + sourceArray[i]
  }
  return total
}

const reduceToAllTrue = function(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (!sourceArray[i]) return false
  }
  return true
}

const reduceToAnyTrue = function(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}
