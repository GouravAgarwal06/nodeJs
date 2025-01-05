
function sum(a,b){
    return a+b
}


function subtract(a,b){
    return a-b
}

function divide(a,b){
    if(b === 0){
        throw new Error("divide by zero is not allowed")
    }

    return a/b
}

module.exports = {
    sum,
    subtract,
    divide
}