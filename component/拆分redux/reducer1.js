import React from 'react';
import Date from './date1.js'



const addReducer = function (state = Date, action) {
    switch (action.type) {
        case 'ADD': {
           return {
               ...state,
               pro:[...state.pro,action.payload]
           }
        }
        default:
            return state;
     }
}
export default addReducer	