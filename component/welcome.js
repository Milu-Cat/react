import React from 'react';
import H from './高阶组件.js'

class Welcome extends React.Component{
    render() {
        return <div style={{ color: 'green' }}>
             Welcome:{this.props.names}
         </div>
    }
}
let Wel = H(Welcome);
export default Wel;

