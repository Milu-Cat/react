import React from 'react'
import { HashRouter, Route } from 'react-router-dom';  //路由
import Nav from './路由nav.js';
import Home from './home.js';
import One from './one.js';
import Two from './two.js';
class Ly extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <HashRouter>
            <Nav>
                <Route path='/' exact component={Home} /> 
                <Route path='/one'  component={One}/>
                <Route path='/two'  component={Two}/>
            </Nav>
        </HashRouter>
    }
}
export default Ly