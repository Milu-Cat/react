//在父组件定义一个函数传给子组件，子组件调用该函数，调用的同时并把参数传给父组件。
import React from 'react'; 
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
                    {/* 子组件接收父组件的背景颜色值 */}
                    父亲的背景色{this.props.bgColor}
                </div>
                {/* 子组件执行改变颜色的函数 */}
                <button onClick={(e)=>{this.handerClick(e)}}>改变父亲的背景</button> 
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
               <Children bgColor={this.state.bgColor} changeColor={(color)=>{this.bgChange(color)}} />
               {/* 父组件给子组件传值方法 */}
            </div>
        )
    }
}
export default Father;

