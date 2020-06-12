// function dummyFunction(params) {
//   console.log("dummyFunction has been executed");
//   var foo = "bar";

//   function nestedFunction() {
//     console.log("2", foo);
//     var bar =  "baz";
//     console.log(bar);  
//   }

//   console.log("1", foo);
//   nestedFunction();
//   console.log(bar);
// }

// dummyFunction();


function whatIsShadowing() {
    var a = "im a";

    console.log(a);

    function nestedFunction() {
        console.log(a);
        a = "im baby a";
        console.log(a);
    }

    nestedFunction()
    console.log(a);
}

whatIsShadowing();
