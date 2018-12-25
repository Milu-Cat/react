import React from 'react'
import { createStore } from "redux";
import { combineReducers } from 'redux';
import AddReducer from './reducer1.js'
import addAction1 from './active1.js'
import addAction2 from './active2.js'
import delReducer from './reducer2.js';


const allReducers = {
    addpro: AddReducer,
    delpro:delReducer
}
const rootReducer = combineReducers(allReducers);

let store = createStore(rootReducer);

let n = 1;
class Text extends React.Component{
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.del=this.del.bind(this)
    }
    add() {
        if (n == 1) {
             this.forceUpdate();
            store.dispatch(addAction1('诸葛亮', '孔明', '武侯'));
            n = 0;
        }
    }

    del() {
        this.forceUpdate();
        store.dispatch(addAction2('诸葛亮', '孔明', '武侯')); 
    }
    
    render() {
        return <div>
            <h1>拆分Reducer:</h1>
            {store.getState().addpro.pro.map(function (item, index) {
                return <p key={index}>{item.name}{item.second}{item.info}</p>
            })}
           {store.getState().delpro.pro.map(function (item, index) {
                return <p key={index}>{item.name}{item.second}{item.info}</p>
            })}
            <button onClick={this.add}>添加</button>
            <button onClick={this.del}>删除</button>
         </div>
    }
}
export default Text

