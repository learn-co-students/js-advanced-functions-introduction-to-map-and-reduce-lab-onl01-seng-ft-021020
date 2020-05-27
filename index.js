// Your code here
function mapToNegativize(array){
    const newArray = []
    for (let i=0; i < array.length; i++) {
        newArray.push(array[i]*(-1))
    }
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    const newArray = []
    for (let i=0; i < array.length; i++) {
        newArray.push(array[i]*2)
    }
    return newArray
}

function mapToSquare(array) {
    const newArray = [];
    for (let i=0; i < array.length; i++) {
        newArray.push(array[i]**2);
    }
    return newArray;
}

function reduceToTotal(array, start = 0) {
    for (let i=0; i<array.length; i++) {
        start += array[i]
    }
    return start;
}

function reduceToAllTrue(array) {
    let status = true
    for (let i=0; i<array.length; i++) {
        if (!array[i]) {
            status = false
        }
    }
    return status
}

function reduceToAnyTrue(array) {
    let status = false
    for (let i=0; i<array.length; i++) {
        if (array[i]) {
            status = true
        }
    }
    return status
}