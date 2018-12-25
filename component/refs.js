//ref可以指向dom节点，和有状态组件，但是不能指向无状态组件
import React from 'react';
//react16.3版本之前的旧的写法
// class Ss extends React.Component{
//     constructor(props) {
//         super(props);
//         this.change = this.change.bind(this);
//         this.state = {
//             color:'green'
//         }
//     }
//     change() {
//         console.log(this.refs.con.innerHTML=this.state.color)
//     }
//     render() {
//         return <div ref='con' onClick={this.change}>
//             绑定事件
//         </div>
//     }
// }
// export default Ss

//react16.3版本之后的写法，需要先创建但是功能一样
// class Ss extends React.Component{
//     constructor(props) {
//         super(props);
//         this.change = this.change.bind(this);
//         this.myref = React.createRef();
//         this.state = {
//             color:'green'
//         }
//     }
//     change() {
//        // console.log(this.myref) //这里得到的是一个组件
//        //console.log(this.myref.current.innerHTML) //使用current，这里可以得到节点
//        this.myref.current.innerHTML=this.state.color
//     }
//     render() {
//         return <div>
//             <h1>Refs:</h1>
//             <p  ref={this.myref} onClick={this.change}>绑定事件</p>
//         </div>
//     }
// }
// export default Ss


//ref指向子组件
// class Cc extends React.Component{
//     render(){
//         return <div>
//               子组件
//             </div>
//       }
// }

// class Ss extends React.Component{
//     constructor(props) {
//         super(props);
//         this.change = this.change.bind(this);
//         this.myref = React.createRef();
//         this.state = {
//             color:'green'
//         }
//     }
//     change() {
//        console.log(this.myref) //这里得到的是子组件Cc
//     }
//     render() {
//         return <div  onClick={this.change}>
//             绑定事件
//             <Cc ref={this.myref}/>
//         </div>
//     }
// }
// export default Ss


//ref指向子组件并获取子组件的DOM
// class Cc extends React.Component{
//     render() {
//         const  Child = React.forwardRef((props, ref) => {
//             return <div ref={ref}>
//                 子组件
//             </div>
//         })
//         return Child;
//       }
// }

// class Ss extends React.Component{
//     constructor(props) {
//         super(props);
//         this.change = this.change.bind(this);
//         this.myRef = React.createRef();
//     }
//     change() {
//        console.log(this.myRef.current) //这里得到的是子组件Cc
//     }
//     render() {
//         return <div  onClick={this.change}>
//             <Cc ref={this.myRef} />
//         </div>
//     }
// }
// export default Ss



class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // 创建一个ref去储存textInput DOM元素
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
      // 很明显的，让text input获得焦点使用了原生的DOM API
      // 注意：我们通过current去获得DOM节点
      this.textInput.current.focus();
    }
   
    render() {
      // 告诉React我们想要将<input>的ref和构造器中创建的textInput联系起来
      return (
          <div>
              <h1>Refs：</h1>
          <input type="text" ref={this.textInput} />
          <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
        </div>
      );
    }
}

//模仿挂载后被点击
class AutoFocusTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }
   
    componentDidMount() {
      this.textInput.current.focusTextInput();
    }
   
    render() {
      return (
        <CustomTextInput ref={this.textInput} />
      );
    }
  }
  export default AutoFocusTextInput