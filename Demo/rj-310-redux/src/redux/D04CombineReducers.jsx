import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers} from "redux";


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


const mathReducer = (state = initialState.numbers, action) => {
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

const userReducer = (state = initialState.user, action) => {
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
 *  combineReducers(reducer1, reducer2, ...) 
 *  as result state object will be a map of
 *  "reducerName": <reducerManagedState>
 *  Es.
 *  "mathReducer":{result:100,lastValues:[]}
 * 
*/
const store = createStore(combineReducers({mathReducer, userReducer}));

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