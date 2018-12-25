//兄弟组件传值（父组件给子组件A传一个函数，子组件A调用该函数并返回一个数据给父组件。父组件再将子组件A返回的数据传给子组件B）
import React from 'react';
class Children1 extends React.Component{
    constructor(props){
        super(props);
    }
    handerClick(){
        this.props.changeChild2Color("green")//改变兄弟的背景色
    }
    render(){
        return(
            <div>
                <button onClick={(e)=>{this.handerClick(e)}}>这是Children1：改变children2的背景</button>
            </div>
        )
    }
}

class Children2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            // 从父元素获取自己的背景色
            <div style={{background:this.props.bgColor}}> 
              <div>Children2背景色{this.props.bgColor}</div>
            </div>
        )
    }
}

//父组件
class Father extends React.Component{
    constructor(props){
        super(props);
        this.state={ //这里用的是等号
            child2BgColor:'#999' //设置默认的children2的背景色
        }
    }
    onChild2BgColorChange(color){
      this.setState({ //这里用的是括号
          child2BgColor:color
      })
    }
    render(props){
        return(
            <div>
               <Children1 changeChild2Color={(color)=>{this.onChild2BgColorChange(color)}} />
               <Children2 bgColor={this.state.child2BgColor} />
            </div>
        )
    }
}
export default Father;

