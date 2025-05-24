function addNumber(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

let result = addNumber(5,5,5,5,5,5,5,5,5);
console.log(result)