import { NavLink } from 'react-router-dom'
import React from 'react'
// import './../路由.css';
class Nav extends React.Component{
    constructor(props) {
         super(props)
    }
    render() {
        return <div>
            <h1>路由：</h1>
            <div>{this.props.children}</div>
            <url style={{}}>
                <li><NavLink to='/' exact >Home</NavLink></li>
                <li><NavLink to='/one'>One</NavLink></li>
                <li><NavLink to='/two' >Two</NavLink></li>
            </url>
        </div>
    }
}
export default Nav