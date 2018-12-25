//采用回调函数方式传值
//子组件
class Children extends React.Component{
    constructor(props){
        super(props);
    }
    handerClick(){
        this.props.changeColor("green");//此函数必须和父组件中的函数一样，将要改成什么颜色传给父组件，来改变父组件的值
    }
    render(){
        return(
            <div>
                <div>
                    父亲的背景色{this.props.bgColor}//子组件接收父组件的背景颜色值
                </div>
                <button onclick={(e)=>{this.handerClick(e)}}>改变父亲的背景</button> //子组件执行改变颜色的函数
            </div>
        )
    }
}
//父组件
class Father extends React.Component{
    constructor(porps){
        super(porps);
        this.state={
            bgColor:'#999' //父组件的背景颜色默认值
        }
    }
    bgChange(color){
      this.setState({
          bgColor:color
      })
    }
    render(props){
        return(
            <div style={{background:this.state.bgColor}}>
               <Children bgColor={this.state.bgColor} changeColor={(color)=>{this.bgChange(color)}} />//父组件给子组件传值方法
            </div>
        )
    }
}