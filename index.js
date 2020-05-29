// Your code here
function mapToNegativize(ray) {
    let result = ray.map(function(e) {
        return e * -1
    });

    return result
}

function mapToNoChange(ray) {
    let result = ray.map(function(e) {
        return e
    });

    return result
}

function mapToDouble(ray) {
    let result = ray.map(function(e) {
        return e * 2
    });

    return result
}

function mapToSquare(ray) {
    let result = ray.map(function(e) {
        return e ** 2
    });

    return result
}

function reduceToTotal (ray, start=0) {
    let total = start 

    for (let i = 0; i < ray.length; i++) {
        total += ray[i]
    }

    return total
}

function reduceToAllTrue(ray) {
    for (let i = 0; i < ray.length; i++){
        if (!ray[i]) {
            return false
        }
    }

    return true
}

function reduceToAnyTrue(ray) {
    for (let i = 0; i < ray.length; i++){
        if (ray[i]) {
            return true
        }
    }
    return false
    
}