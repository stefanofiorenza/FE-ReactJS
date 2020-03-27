
/**
 *  Template function (biggerProcess) what exposes extension points as function implementations
 * 
 *  Let's consider a function implementing a process
 *  with many functions calls:
 * 
      1) some will be always same implementation
      2) other could apply a different logic according to different scenarios
 * 
 */

//Existing function with function implementation

        //existing implementations of functions for a process
        function someLogicThatCalculatesState(x){
            console.log("[someLogicThatCalculatesState] working with data: "+x);
            return {"result":x+50};
        }

        function someAdditionalLogicToBeAppliedAlwaysToState(newState){
            console.log("[someAdditionalLogicToBeAppliedAlwaysToState] working with data: ",newState)
        }

        function finalizationLogic(finalState){
            console.log("[finalizationLogic]  working with data: ",finalState);
        }

     

//1) Solution One: Pass callback functions as biggerProcess arguments :

        
        function biggerProcess(input, loadSomeData,preProcessing, saveResult){


            // do something ..

                    loadSomeData(input); //callback function passed as 2nd argument

            // ...many meaningful lines of code...
            // do something producing x...
            x=100;
                
            let state = someLogicThatCalculatesState(x);
            
                    preProcessing(state);  //callback function passed as 3rd argument

            let finalState=someAdditionalLogicToBeAppliedAlwaysToState(state);  

                    saveResult (finalState); //callback function passed as 4th argument

            finalizationLogic(finalState);
        }


    // callback implementations
        function loadSomeData(input){
            console.log("[loadSomeData]  working with data: ",input);
        }
        
        function preProcessing(state){
            console.log("[preProcessing]  working with data: ",state);
        }
        
        function saveResult(finalState){
            console.log("[saveResult]  working with data: ",finalState);
        }


    //test:

    biggerProcess(100,loadSomeData,preProcessing,saveResult );



 //2) Solution 2: High order functions

            /*
            function biggerProcess(input,highOrderFunction){

                // do something ..

                        let nextFunction = highOrderFunction(input); //higherOrderFunction (Wrapper for all steps)

                // ...many meaningful lines of code...
                // do something producing x...
                x=100;
                
                let state = someLogicThatCalculatesState(x);
            
                        let lastFunction = nextFunction(state);   //second step from higherOrderFunction

                let finalState=someAdditionalLogicToBeAppliedAlwaysToState(state);  

                        lastFunction (finalState); //last step from higherOrderFunction 

                finalizationLogic(finalState);

            }


         function  highOrderFunction(input){
            console.log("[loadSomeData]  working with data: ",input);
            return function preProcessing(state){
                console.log("[preProcessing]  working with data: ",state);
                return function saveResult(finalState){
                    console.log("[saveResult]  working with data: ",finalState);
                }
            }
         }


         //test
         biggerProcess(100,highOrderFunction);
         */
        

/**
 *   SUMMARY: 
 *  
 *   I have a function that does some complex work
 *   and splits that into some smaller functions.
 * 
 *   Some of those function might have different implementation, while others are fixed and implemented.
 *   
 *   On side of (<big function> implementor):
 *   I offer possibility to extend function behavior defining function arguments (many = callbacks, oneAsWrapper = highOrder function)
 * 
 * 
 *   On side of user of (<big function>):
 *   I implement extension functions and pass them to big function.   
 * 
 */