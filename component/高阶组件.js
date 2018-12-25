//高阶组件
import React from 'react';
let date = { 'name': 'lily' };
let Hoc = (Con) => {
    class Hoczj extends React.Component{
        constructor(props) {
            super(props);
            this.state={'name':''}
        }
        componentWillMount(){ 
            var x = date.name; 
            this.setState({
                'name':x
            })
        }
        render(){
            return <Con names={this.state.name} />
        }
    }
    return Hoczj
}
export default Hoc

