import React from 'react';
import { Link, Route,Switch} from "react-router-dom";
import One from './微信联系人1.js'
import Two from './微信联系人2.js'

class Wx extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h1 style={{ marginTop: "150px", textAlign: 'center', color: 'green' }}>
               这里是微信{this.props.match.params.name}
            </h1>

            {/* 路由嵌套 */}    
            <ul style={{display:'flex',justifyContent:'space-around'}}>
                <li><Link to='/wx/aa/'>联系人1</Link></li>
                <li><Link to='/wx/one/'>联系人2</Link></li>
            </ul>
            <div>
                <Route exact path='/wx/aa/' component={One} />
                <Route path='/wx/one/' component={Two} />
            </div>
        </div>

    }
}
export default Wx