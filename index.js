// Your code here
// Remember, all map methods return a new Array.

function mapToNegativize(sourceArray) {
    let negativeArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        negativeArray.push(sourceArray[i] * -1)
    }
    return negativeArray;
}

function mapToNoChange(sourceArray) {
    let newArray = [];
    for (let i =0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray;
}

function mapToDouble(sourceArray) {
    let doubleArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        doubleArray.push(sourceArray[i] * 2)
    }
    return doubleArray;
}

function mapToSquare(sourceArray) {
    let squareArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        squareArray.push(sourceArray[i] * sourceArray[i])
    }
    return squareArray;
}

// Remember, all reduce methods return a value.

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false 
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false;
}
