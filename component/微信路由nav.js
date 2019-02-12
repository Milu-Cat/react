import React from 'react';
import { Link } from "react-router-dom";
import './微信路由.css'

class Nav1 extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        let li1 = { color: '#000', fontSize: '19px' }
        let date = JSON.stringify({ 'a': 'l', 'b': 'c', 'c': 'r' }) //用通配符传一个对象,先转成字符串
        let query = {
            pathname: '/fx/',
            query:'lcr'
        }
        let state = {
            pathname: '/wo/',
            state:'lcr'
        }
        return <div style={{ border: '1px solid #000', width:'300px',height:'500px',margin:'auto',display:'flex',flexDirection:'column',justifyContent:'space-between'}}> 
            <h1 style={{textAlign:'center'}}>微信界面</h1>
            <div>{this.props.children}</div>
            <ul style={{display:'flex',justifyContent:'space-around',marginTop:'220px'}} className='wx'>
                <li><Link to='/wx/lcr' exact  style={li1}>微信</Link></li>
                <li ><Link to={'/txl/'+date}  style={li1}>通讯录</Link></li>
                <li ><Link to={query}  style={li1}>发现</Link></li>
                <li ><Link to={state}  style={li1}>我</Link></li>
            </ul>
          </div>
      }
}
export default Nav1