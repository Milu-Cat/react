import React from 'react';

class Txl extends React.Component{
    constructor(props) {
        super(props);
        let data = JSON.parse(this.props.match.params.info)
        this.state = {
            'dd':data
        }
    }
    render() {
        
        return <h1 style={{marginTop:"150px",textAlign:'center',color:'red'}}>
            这里是通讯录{this.state.dd.a}{this.state.dd.b}{this.state.dd.c}
        </h1>
    }
}
export default Txl