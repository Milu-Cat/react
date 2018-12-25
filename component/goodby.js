import React from 'react';
import H from './高阶组件.js'
class Goodby extends React.Component{
    render() {
        return <div style={{ color: 'red' }}>
            Goodby:{this.props.names}
         </div>
    }
}
let Gy = H(Goodby);
export default Gy;

