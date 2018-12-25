import React from 'react';

class Ss extends React.Component{
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            color:'green'
        }
    }
    change() {
        if (this.state.color === 'green') {
            this.setState({
              color:'red'
            })
        } else {
            this.setState({
              color:'green'
            })
         }
        
    }
    render() {
        return <div onClick={this.change} style={{background:this.state.color}}>
            背景颜色：{this.state.color}
        </div>
    }
}
export default Ss