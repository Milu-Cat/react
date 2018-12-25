//兄弟组件传值（子组件传给父组件，由父组件再传给另一个子组件）
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
                <div>Children1</div>
                <button onClick={(e)=>{this.handerClick(e)}}>改变children2的背景</button>
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
            <div style={{background:this.props.bgColor}}> //从父元素获取自己的背景色
              <div>Children2背景色{this.props.bgColor}</div>
            </div>
        )
    }
}

//父组件
class Father extends React.Component{
    constructor(porps){
        super(porps);
        this.state={
            child2BgColor:'#999' //设置默认的children2的背景色
        }
    }
    onChild2BgColorChange(color){
      this.setState({
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