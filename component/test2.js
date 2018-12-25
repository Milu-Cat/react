//组件状态state

import React from 'react';
class Nav extends React.Component{ 
    constructor(props){
        super();
        this.state={'title':'test2.js'}; //在constructor()中指定当前的状态（初始化）：this.state。该状态中存有一个数据，会渲染到DOM中
    }
    change=()=>{
        this.setState({'title':this.props.title}) //自定义一个方法，可以修改状态，即修改数据
    }

    render(){
        return <h1 onClick={this.change}>这些内容来自{this.state.title}</h1>
    }
}
export default Nav;