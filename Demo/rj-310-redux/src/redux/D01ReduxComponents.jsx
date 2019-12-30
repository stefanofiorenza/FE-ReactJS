import {render} from "react-dom";
import React from "react";
import {createStore} from "redux";

const initialState = {
    result: 1,
    lastValues: []
};

/** !!)
 *  Reducer updating state directly.
 *  In Console all logs will reflect only the last state, because they refer to same object state in memory * 
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state.result =state.result + action.payload;
            state.lastValues.push(action.payload);          
            break;

        case "SUBTRACT":
            state.result =state.result -action.payload;
            state.lastValues.push(action.payload);        
            break;
    }
    return state;
};


const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});


// later on event happens in different components...
store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});