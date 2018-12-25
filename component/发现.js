import React from 'react';

class Fx extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 style={{marginTop:"150px",textAlign:'center',color:'pink'}}>
            这里是发现{this.props.location.query}
        </h1>
    }
}
export default Fx