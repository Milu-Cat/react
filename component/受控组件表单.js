import React from 'react';

// class Ipt extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             'value':'lcr'
//         }
//         this.change=this.change.bind(this)
//     }
//     change(e) {
//         this.setState({
//               'value':e.target.value
//           })
//     }
//     render() {
//         return (<div style={{clear:'left'}}>
//             <input value={this.state.value} onChange={this.change} style={{clear:'left',height:'20px'}}/>
//             <p>{this.state.value}</p>
//         </div>)     
//     }
// }
// export default Ipt

//受控组件
class Ipt extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'value': 'lcr',
            'name':'lcr'
        }
        this.change=this.change.bind(this)
    }
    change(e) {
        let x = e.target.name;
        if (x == 'ipt') {
           this.setState({
              'value':e.target.value
           })
        }
        if (x == 'user'){
            this.setState({
                'name':e.target.value
             })
        }
    }
    render() {
        return (<div style={{ clear: 'left' }}>
            <h1>受控组件:</h1>
            <input value={this.state.value} onChange={this.change} style={{clear:'left',height:'20px'}} name='ipt'/>
            <p>{this.state.value}</p>
            <input value={this.state.name} onChange={this.change} style={{clear:'left',height:'20px'}}  name='user'/>
        </div>)     
    }
}
export default Ipt

