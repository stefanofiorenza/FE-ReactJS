

/**
 * function inside a function
 * 
 * 
 */

        /* 1) ES6 
            const foo = a => b => a + b;
        */

        /* 2) ES5
        function foo(a) {  
            return function(b) {  
                return a + b;  
            } 
        }
        */

        // Test (Common)
        /*
            let result =foo(1)(2); //=> 3
            console.log(result);
        */


//2) Chaining functions

/**
 * Because of closure every function can access the variable of external function 
 */
/*
function external (data){
    console.log('external',data);

    return function internal (otherData){
        console.log('internal',data);
        console.log('internal',otherData);

        return function deeperInternal (someAdditionalData){
            console.log('deeperInternal',data);
            console.log('deeperInternal',otherData);
            console.log('deeperInternal',someAdditionalData);
        }
    }
}

const myFunctionName = external;
myFunctionName("Stefano")("Fiorenza")("Javascript"); // function call and parameters to internal functions
*/

/** 3) Why not to define a function with 3 args instead?
*/

/*
function external (data,otherData,someAdditionalData){
    console.log('deeperInternal',data);
    console.log('deeperInternal',otherData);
    console.log('deeperInternal',someAdditionalData);
}

// because high order functions give possibility to call steps of the process
// in different places such as:


    // doSomething....
    const internal = external("Stefano")

    // doSomething more....
    const deepInternal = internal("Fiorenza");


    //do some other useful things...
    deepInternal("Javascript");

    //finalize the whole thing...

*/
