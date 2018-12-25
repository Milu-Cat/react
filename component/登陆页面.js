import React from 'react';

class Dl extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'name': '',
            'pwd':'',
            'f': true
        }
        this.onchange = this.onchange.bind(this)
        this.change = this.change.bind(this)
        this.tuichu=this.tuichu.bind(this)
    }
    onchange(e) {
        if (e.target.name == 'user') {
         this.setState({
              'name':e.target.value
         })
        }
        if (e.target.name == 'pw') {
                    this.setState({
            'pwd':e.target.value
         })
        }
    }
    change() {
        if (this.state.name ==='admin' && this.state.pwd === 'admin') {
            this.setState({
                 'f':false
             })
        } 
    }
    tuichu() {
        this.setState({
            'f': true,
            'name': '',
            'pwd':''
        })
    }
    render() {
        let Btn = function () {
            return <button onClick={this.change}>登陆</button>
        }.bind(this)
        let Btn1 = function () {
            return <button onClick={this.tuichu}>退出</button>
        }.bind(this)

        if (this.state.f) {
            return <div>
              <h1>登陆页面：</h1>
            <p>用户名：<input name='user' value={this.state.name} onChange={this.onchange}/></p>
            <p>密码：<input name='pw' value={this.state.pwd} onChange={this.onchange} type='password'/></p>
            <Btn />
          </div>
        } else {
            return <div>
                <p>欢迎登陆</p>
                <Btn1 />
            </div>
        }

    }
}
export default Dl