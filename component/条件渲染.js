import React from 'react';
//if写法
// class Text extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             'f':true
//         }
//         this.change=this.change.bind(this)
//     }
//     change=()=>{
//         if (this.state.f) {
//             this.setState({
//                 'f':false
//             })
//         } else {
//             this.setState({
//                 'f':true
//             })
//         }
//     }
//     render() {
//         let Btn = function () {
//             return <button onClick={this.change}>点击</button>
//         }.bind(this)
//         if (this.state.f) {
//             return <div>
//                 <p>welcome</p>
//                 <Btn />
//             </div>
//         } else {
//             return <div>
//                 <p>goodby</p>
//                 <Btn />
//             </div>
//         }
//     }
// }
// export default Text

//与逻辑写法
// class Text extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             'f':true
//         }
//     }

//     render() {
//         return <div>
//             <h1>Hello!</h1>
//             {this.state.f && <h1>lily</h1>}
//         </div>
//     }
// }
// export default Text

//条件运算符写法
class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'f': true
        }
        this.change = this.change.bind(this)
    }
    change = () => {
         this.state.f?this.setState({'f':false}):this.setState({'f':true})
    }
    render() {
        let Btn = function () {
            return <button onClick={this.change}>点击</button>
        }.bind(this);
        return <div>
            <h1>条件渲染：</h1>
            < div >
            { this.state.f?<p>welcome</p>:<p>goodby</p>}
            </div>
        < Btn />    
     </div>
    }
}
export default Text

