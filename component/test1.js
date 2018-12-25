//父子组件传值

import React from 'react';

class Nav extends React.Component{ //嵌套
    constructor(props){
        super();
    }
    render(){
        return <p className="p1">嵌套{this.props.title}</p>
    }
}

class Txt extends React.Component{
    constructor(props){ //这里的参数是一个属性，必须写props这个名字
        super();
        this.handle=this.handle.bind(this);  //第一种绑定方法
        this.handle1=this.handle1.bind(this);
    }
    handle(){
         console.log(this)
    }
    handle1(){
        console.log('handle1')
    }
    handle2(){
        console.log('handle2')
    }
    handle3(){  //该方法的箭头函数的写法：handle3=()=>{console.log('handle3')}
        console.log('handle3')
    }
    render(){
        let x="导航";
       return <div>
          <h1 onClick={this.handle1}>这些内容来自{this.props.name}{this.props.say}</h1>
          {/* 第二种绑定方法 */}
          <h1 onClick={this.handle2.bind(this)}>这些内容来自{this.props.name}{this.props.say}</h1>
            {/* 第三种绑定方法 */}
          <h1 onClick={()=>this.handle3()}>这些内容来自{this.props.name}{this.props.say}</h1>
          <Nav title={x}/>
       </div>
    }
}
 export default Txt;