import React from 'react';
import './../banner.css';
//方法Btns组件 
function Btns() {
    return (<ul id="btns">
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
    </ul>);
}
//方法Imgs 组件
function Imgs() {
    return (<ul id="imgs">
        <li><img alt="图片1" src={require('./../img/1.jpg')} /></li>
        <li><img alt="图片1" src={require('./../img/2.jpg')} /></li>
        <li><img alt="图片1" src={require('./../img/3.jpg')} /></li>
        <li><img alt="图片1" src={require('./../img/4.jpg')} /></li>
        <li><img alt="图片1" src={require('./../img/5.jpg')} /></li>
        <li><img alt="图片1" src={require('./../img/6.jpg')} /></li>
    </ul>);
}
//es6 类组件
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = { iNow: 0, bCheck: true };
        this.handleMouseover = this.handleMouseover.bind(this);
        this.handleMouseout = this.handleMouseout.bind(this);
    }
    handleMouseover() {
        this.state.bCheck = false;
    }
    handleMouseout() {
        this.state.bCheck = true;
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.timer(), 2000);
    }
    componentWillUnmount() { clearInterval(this.timerID); }
    timer() {
        if (this.state.bCheck) {
            if (this.state.iNow === 5) {
                this.state.iNow = 0;
            } else {
                this.state.iNow++;
            }
            this.iNowlistener();
        } else {
            return false;
        }
    }
    iNowlistener() {//改变的核心函数 
        var aBtns = document.getElementsByTagName('a');
        var oImgs = document.getElementById('imgs');
        var aImgsLi = oImgs.getElementsByTagName('li');
        aBtns[0].style.background = 'rgba(255,255,255,0.5)';
        var len = aBtns.length;
        for (var i = 0; i < len; i++) {
            if (i === this.state.iNow) {
                aBtns[i].style.background = 'rgba(255,255,255,0.5)'; aImgsLi[i].style.display = "block";
            } else {
                aBtns[i].style.background = 'rgba(0,0,0,0.3)'; aImgsLi[i].style.display = "none";
            }
        }
    }
    //渲染组件模板 
    render() { return (<div id={this.props.idNames} onMouseOver={this.handleMouseover} onMouseOut={this.handleMouseout}> <Btns /> <Imgs /> </div>); }
}
export default Banner;
