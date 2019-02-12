import React from 'react';

class Con extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             name:''
        }
    }
    componentWillMount() {  //调用render()前，最后一次机会修改状态
        this.setState({
            name:'实例化期'
        })
        console.log('willmount');
        // alert(document.getElementById('one').innerHTML) //报错，因为该方法是在调用render方法之前调用，这时还没有渲染，没有真实DOM，document.getElementById是操作真实DOM的，所以报错
    }
    componentDidMount() {
        console.log('didmount')
        //alert(document.getElementById('one').innerHTML) //实例化期: ES6初始化属性
    }
    componentWillReceiveProps(newProps) { 
        console.log(newProps)
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(newProps, newState) {  //   是否重新渲染组件
        // if (this.props.info === this.newProps.info || this.state.name === this.newState.name) {
        //     return false; //结束，代码读到此位置
        // } else {
        //     return true;//重新渲染
        // }
        // console.log()
        return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        return <div id='one'>
             {this.state.name}，
            {this.props.info}
         </div>
    }
}
Con.defaultProps = {
    info: ' ES6初始化属性'
}

class Father extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fa:'存在期'
        }
        this.change = this.change.bind(this);
    }
    change() {
        this.setState({
             fa:'更新属性！'
         })
    }
    render() {
        return <div onClick={this.change} title='生命周期'>
            <h1>生命周期：</h1>
            <Con info={this.state.fa} />
        </div>
    }
}
export default Father;



