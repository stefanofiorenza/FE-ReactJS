
/**
SETUP: 
1) 

*/

class Store {

    constructor(reducer){
        this.reducer=reducer;
        this.state={}
    }
   

    dispatch = (action)=> {
        this.state=reducer(this.state, action);
    }

    getState = () =>{
        return this.state;
    }

    subscribe (listener){
        listener();
    }


}

function reducer (store, action){

    console.log("Reducer", state);
    console.log("Action", action);

}