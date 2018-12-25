import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import Nav1 from './微信路由nav.js'
import Wx from './微信.js'
import Txl from './通讯录.js'
import Fx from './发现.js'
import Wo from './我.js'

class Wxly extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render() {
        return <HashRouter>
            <Nav1>
        {/* :name可以看作跳转的页面的类似于props的一个属性,在Nav组件中，to=''里面路径后面写的数据会赋值给:name该属性 */}
                <Route path='/wx/:name' exact component={Wx}/> 
                <Route path='/txl/:info'  component={Txl}/>
                <Route path='/fx'  component={Fx}/>
                <Route path='/wo'  component={Wo} />
            </Nav1>
        </HashRouter>
    }
}
export default Wxly