// Your code here

// my own map-like methods

// mapToNegativize returns an array with all values made negative
//   1) transforms correctly
function mapToNegativize(numbs) { 
    let negNumbs = [] 
    numbs.forEach(numb => {
        numb = numb * -1
        negNumbs.push(numb)
    });
    return negNumbs
}

//   mapToNoChange returns an array with the original values
//     2) transforms correctly
const mapToNoChange = function(arr) { 
    let newArr = [] 
    arr.forEach(element => { 
        newArr.push(element)
    })
    return newArr
}

//   mapToDouble returns an array with the original values multiplied by 2
//     3) transforms correctly
const mapToDouble = function(numbs) {
    let doubledNumbs = [] 
    for (let numb of numbs) {
        let doubledNumb = numb * 2
        doubledNumbs.push(doubledNumb)
    }
    return doubledNumbs
}

//   mapToSquare returns an array with the original values squared
//     4) transforms correctly
function mapToSquare(numbs) {
    let squaredNumbs = [] 
    for (let numb of numbs) {
        let squaredNumb = numb ** 2
        squaredNumbs.push(squaredNumb)
    }
    return squaredNumbs
}

// my own reduce-like methods

// reduceToTotal returns a running total when not given a starting point
//   1) reduces correctly
// reduceToTotal returns a running total when given a starting point
//   2) reduces correctly
function reduceToTotal(arr, start=0) {
    let total = start 
    arr.forEach(element => {
        total = total + element
    })
    return total
}
// reduceToAllTrue returns true when all values are truthy
//   3) reduces correctly
// reduceToAllTrue returns false when any value is falsy
//   4) reduces correctly
function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        if (!arr[i]) return false
      }
      return true
}
// reduceToAnyTrue returns true when a true value is present
//   5) reduces correctly
// reduceToAnyTrue returns false when no true value is present
//   6) reduces correctly
function reduceToAnyTrue(arr) {
    for (let el of arr){
        if (el) return true
    }
    return false
}
