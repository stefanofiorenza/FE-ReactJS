import {render} from "react-dom";
import React from "react";
import {createStore} from "redux";

const initialState = {
    result: 1,
    lastValues: [],
    username: "Max"
};

/**
 * In this reducer state is copied in a new state object
 * updated fields are overriden using the destructuring operators on both object and array
 * Now in console is possible to see all the states in the sequence of their updates
 */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};


const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated!", store.getState()); // every time getState is called, its data will be different
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