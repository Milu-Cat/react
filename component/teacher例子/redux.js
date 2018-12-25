import React from 'react';
import { createStore } from "redux";
import { combineReducers } from 'redux';

const initialState = {
    cart: [
        {
            product: 'bread 700g',
            quantity: 2,
            unitCost: 90
        },
        {
            product: 'milk 500ml',
            quantity: 1,
            unitCost: 47
        }
    ],
    people: [
        {
            name: '罗斯福',
            znfo: '总统',
            sex:"男"
        }
    ]
}

//Reducer
const productsReducer = function(state=initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                people: [...state.people, action.payload]
            }
        }
        default:
            return state;
    }
}

const cartReducer = function(state=initialState, action) {
    switch (action.type) {
        //添加
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        //删除  
        case DEL_TO_CART: {
            return {
                ...state,
                cart: state.cart.filter(item=>item.product !== action.del.product)
            }    
        }
         //修改   
        case XG_TO_CART: {
            return {
                ...state,
                cart: state.cart.map(item =>item.product === action.payload.product ? action.payload : item)
            }    
        }
        default:
            return state;
    }
}


//action
const ADD_TO_CART = 'ADD_TO_CART';
const DEL_TO_CART = 'DEL_TO_CART';
const XG_TO_CART = 'XG_TO_CART';
//添加
function addToCart(product, quantity, unitCost) {
    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}
//删除
function delToCart(product, quantity, unitCost) {
    return {
        type: DEL_TO_CART,
        del: {
            product,
            quantity,
            unitCost
        }
    }
}

//修改
function xgToCart(product, quantity, unitCost) {
    return {
        type: XG_TO_CART,
        payload: {
            product,
            quantity,
            unitCost
        }
    }
}

//合并reducer
const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);
console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() =>
     console.log(store.getState())
);


unsubscribe();


let n = 1;
class Shopping extends React.Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.del = this.del.bind(this);
        this.xiugai = this.xiugai.bind(this);
    }
   
    add() { 
        if (n == 1) {
            this.forceUpdate(); 
            store.dispatch(addToCart('Coffee 500gm', 1, 250));
            store.dispatch(addToCart('Flour 1kg', 2, 110));
            store.dispatch(addToCart('Juice 2L', 1, 250)); 
            store.dispatch(addToCart('克林顿', '总统', '男'));
            n = 0;
        }
    }

    del() {
        this.forceUpdate(); 
        store.dispatch(delToCart('Juice 2L', 1, 250)); 
    }

    xiugai() {
        
        this.forceUpdate(); 
        store.dispatch(xgToCart('bread 700g', 5, 95)); 
    }

    render(){
        return(
            <div>
               <h1>Redux:</h1>
               {store.getState().shoppingCart.cart.map(function(item,index){
                 return <p key={index}>{item.product}{item.quantity}{item.unitCost}</p> 
               })}
                {store.getState().products.people.map(function(item,index){
                 return <p key={index}>{item.name}{item.znfo}{item.sex}</p> 
                })}
                <button onClick={this.add}>添加</button>
                <button onClick={this.del}>删除</button>
                <button onClick={this.xiugai}>修改</button>
            </div>
        )
    }
}
export default Shopping;