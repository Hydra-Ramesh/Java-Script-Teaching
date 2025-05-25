function f1(){
    console.log("In F1");
   return function f2(){
        console.log("In F2");
        return function f3(){
            console.log("In F3");
            return function f4(){
                console.log("In F4");
                console.log("Hello, World!");
            }
        }
    }
}

let ans = f1();