//方法一：手动传递pops属性，逐层传递
import React from 'react';
// class Navson extends React.Component{
//       constructor(props){
//           super(props)
//       }
//       render(){
//             return  <div>
//                  <h2>{this.props.title}</h2>
//             </div>
//       }
// }

// class Nav extends React.Component{ 
//     constructor(props){
//         super();
//         this.state={'title':'父组件向更深层的子组件传值.js'}; 
//     }
//     change=()=>{
//         this.setState({'title':this.props.title}) 
//     }

//     render(){
//         return <div>
//             <h1 onClick={this.change}>这些内容来自{this.state.title}</h1>
//             <Navson title="父组件向更深层的子组件传值.js组件"/>
//         </div>
        
//     }
// }
// export default Nav;

// 方法二：使用conText广播式传递
const PropTypes = require('prop-types');
class Button extends React.Component {
  render() {
    let ss={background: this.context.color,height:this.context.height}
    return (
      <button style={ss}>
        {/* this.props.children即下面组件中<Button>中的Delete */}
        {this.props.children}
      </button>
    );
  }
}
Button.contextTypes = {
  color: PropTypes.string,
  height: PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  getChildContext() {
    return {color: "purple",height:'50px'};
  }

  render() {
      return <div><Message text="父组件向更深层的子组件传值，context广播式方法" /></div>;
    
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
  height: PropTypes.string
};
export default MessageList;
/*通过在MessageList（context提供者）中添加childContextTypes和getChildContext，React会向下自动传递参数，任何组件只要在它的子组件中（这个例子中是Button），就能通过定义contextTypes来获取参数。
绝大多数应用程序不需要使用 context.
如果你想让你的应用更稳定，别使用context。因为这是一个实验性的API，在未来的React版本中可能会被更改。
如果你对状态管理库如Redux或Mobx不太熟悉，那就别用context了。在很多实际应用中，这些库及其React绑定是管理与许多组件相关的state的不错选择。Redux可能是你更好的选择，而不是context。
如果你不是一个有经验的React的开发者，不要使用context，通常仅使用props和state来实现功能是更好的一种方式。
尽管有这些警告，如果你还是坚持要使用context，那么尽量将使用context的代码隔离到一小块地方并避免直接使用context API，这样以后API变更的时候更容易升级。
*/  

//方法二练习
// const PropTypes=require('prop-types');
// class Child2 extends React.Component{
//       render(){
//            let ss={color:this.context.color1};
//            return (<div style={ss}>
//                这里是深层子组件，字体颜色来自父组件的传值
//            </div>
//            );
//       }
// }
// Child2.contextTypes={
//      color1:PropTypes.string
// };
// class Child1 extends React.Component{
//       render(){
//           return <div>
//               {this.props.text}<Child2 />
//           </div>
//       }
// }
// class Father extends React.Component{
//      getChildContext(){
//           return {color1:'pink'}
//      }
//      render(){
//           return <div>
//              <Child1 text='这些内容来自父组件向深层子组件传值.js'/>
//           </div>
//      }
// }
// Father.childContextTypes={
//      color1:PropTypes.string
// }
// export default Father;
//方法三：redux传递