import React from 'react';

class Wo extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 style={{marginTop:"150px",textAlign:'center' ,color:'yellow'}}>
            这里是我{this.props.location.state}
        </h1>
    }
}
export default Wo