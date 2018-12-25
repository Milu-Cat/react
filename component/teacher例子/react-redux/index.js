import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import themeReducer from './reducer'

const store = createStore(themeReducer)

ReactDOM.render(
    //Provider包裹在App外边，然后传递给其一个 store 这样所有其包裹的子组件都可以使用 store 上存储的数据了
    <Provider store={store}> 
        <App />
    </Provider>, document.getElementById('root'));
