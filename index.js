// Your code here

function mapToNegativize(sourceArray){
    let result = []
    sourceArray.forEach(function(e){ 
        e *= -1
        result.push(e)
    } )
    return result

}
function mapToNoChange(sourceArray){
    return sourceArray

}
function mapToDouble(sourceArray){
    let result = []
    sourceArray.forEach(function(e){ 
        e *= 2
        result.push(e)
    } )
    return result

}

function mapToSquare(sourceArray){
    let result = []
    sourceArray.forEach(function(e){ 
        e **= 2
        result.push(e)
    } )
    return result

}

function reduceToTotal(sourceArray, startingPoint = 0){
    
    let result = startingPoint
    sourceArray.forEach(function(e){ 
        result += e
    } )
    return result

}

function reduceToAllTrue(sourceArray){
    let result = sourceArray[0]
    sourceArray.forEach(function(e){ 
        result = result && !!e
    } )
    return result

}
function reduceToAnyTrue(sourceArray){
    let result = sourceArray[0]
    sourceArray.forEach(function(e){ 
        result = result || !!e
    } )
    return result

}