import React from 'react'
import './../nav.css';

class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'zt1': 'none',
            'zt2':'none',
            'zt3':'none'
        }
    }
    change() {
        this.setState({
            'zt1': 'block'
         })
    }
    change_() {
        this.setState({
             'zt1':'none'
         })
    }
    change2() {
        this.setState({
            'zt2': 'block'
         })
    }
    change2_() {
        this.setState({
             'zt2':'none'
         })
    }
    change3() {
        this.setState({
            'zt3': 'block'
         })
    }
    change3_() {
        this.setState({
             'zt3':'none'
         })
    }
    render() {
        return <div className="box">
            <div onMouseEnter={() => { this.change() }} onMouseLeave={() => { this.change_()}}>
                <h1>标题</h1>
                <ul style={{display:this.state.zt1}}>
                    <li>内容</li>
                    <li>内容</li>
                    <li>内容</li>
                </ul>
            </div>
            <div onMouseEnter={() => { this.change2() }} onMouseLeave={() => { this.change2_()}}>
                <h1>标题</h1>
                <ul style={{display:this.state.zt2}}>
                    <li>内容</li>
                    <li>内容</li>
                    <li>内容</li>
                </ul>
            </div>
            <div onMouseEnter={() => { this.change3() }} onMouseLeave={() => { this.change3_()}}>
                <h1>标题</h1>
                <ul style={{display:this.state.zt3}}>
                    <li>内容</li>
                    <li>内容</li>
                    <li>内容</li>
                </ul>
            </div>
        </div>
       }
}
export default  Nav