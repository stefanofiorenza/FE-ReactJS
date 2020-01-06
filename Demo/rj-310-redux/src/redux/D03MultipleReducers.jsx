import {render} from "react-dom";
import React from "react";
import {createStore} from "redux";

const initialState = {
    numbers:{
        result: 1,
        lastValues: [],
    },
    user:{
        username: "Max",
        age:27
    }  
};


const mathReducer = (state ,action) => {
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

const userReducer = (state , action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

/**
 *  Many reducers.
 *  Every reducer process one object from state object tree
 *  
 * 
 *  Function that combine reducers:
 *  return a new state object where 
 *  every field in state is updated by the relevant reducer
 *  
 *  Code Pattern <field>: reducer (state.field, action)
 */


const reducers = (state=initialState, action) =>{

    return {
        numbers: mathReducer(state.numbers, action),
        user: userReducer(state.user,action)
    }
}



const store = createStore(reducers);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});



//later on events occurrs in different pages...
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
store.dispatch({
    type: "SET_AGE",
    payload: 30
});