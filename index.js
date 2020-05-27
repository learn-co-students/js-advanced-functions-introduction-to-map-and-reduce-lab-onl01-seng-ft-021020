function mapToNegativize(sourceArray){
    const newArray = []
    for (let i = 0; i < sourceArray.length; i++){
        let negNum = sourceArray[i] *-1
        newArray.push(negNum)
    }
    return newArray
}

function mapToNoChange(sourceArray){
    const newArray = []
    sourceArray.forEach(element => newArray.push(element))
    return newArray
}

function mapToDouble(sourceArray){
    const newArray = []
    sourceArray.forEach(element => newArray.push(element*2))
    return newArray
}

function mapToSquare(sourceArray){
    const newArray = []
    sourceArray.forEach(element => newArray.push(element**2))
    return newArray
}

function reduceToTotal(sourceArray, startingPoint=0){
    let value = startingPoint
    sourceArray.forEach(element => value+=element)
    return value
}

function reduceToAllTrue(sourceArray){
    let value = true
    sourceArray.forEach(element => {
        
        if (element === false){
            value = false
        } 
        
    })
    return value
}

function reduceToAnyTrue(sourceArray){
    let value = false
    sourceArray.forEach(element => {
        if (element == true ){
            value = true
        }
    })
    return value
}