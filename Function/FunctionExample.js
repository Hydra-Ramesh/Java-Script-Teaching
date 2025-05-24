function greetUser(name){
    return "Good Morning , " + name;
}

let callUser = function(name){
    return "Good Night "+ name;
}

let f1 = greetUser("Ramesh");
let f2 = callUser("Ramesh");
console.log(f1);
console.log(f2);