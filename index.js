import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux'

import { Rate, Icon } from 'antd';  //antd星评

// import $ from 'jquery';

//import Mycon from "./compontent/test.js" //引用test.js中的代码
import Mycon1 from "./component/test1.js"
import Mycon2 from "./component/test2.js"
import Mycon3 from "./component/父组件向更深层的子组件传值.js"
import Mycon4 from "./component/子组件向父组件传值.js"
import Mycon5 from "./component/兄弟组件传值.js"
import Mycon6 from "./component/welcome.js"
import Mycon7 from "./component/goodby"
import Mycon8 from "./component/nav.js"
import Mycon9 from "./component/事件绑定.js"
import Mycon10 from "./component/refs.js"
import Mycon11 from "./component/生命周期.js"
import Mycon12 from "./component/banner.js"
import Mycon13 from "./component/数据交互.js"
import Mycon14 from "./component/条件渲染.js"
import Mycon15 from "./component/列表.js"
import Mycon16 from "./component/受控组件表单.js"
import Mycon17 from "./component/登陆页面.js"
// import Mycon18 from "./component/路由.js"
import Mycon19 from "./component/微信路由.js"
// import Mycon20 from "./component/redux.js"
import Mycon21 from "./component/teacher例子/redux.js"
import Mycon22 from "./component/拆分redux/redux.js"
import App from './component/teacher例子/react-redux/App.js';
import themeReducer from './component/teacher例子/react-redux/reducer.js'
import Mycon23 from './component/antd表单1.js'





import img from './img/2.jpg'

//无状态组件
// let arr=["html","css","js",'1'];
// let ss={background:"#ff0",color:"#0ff"};
// let con=<div style={ss}>{arr}</div>
// ReactDOM.render(
//    <div>
//       <h1 style={ss}>hello,world{arr}</h1>
//       {con}
//       <Mycon name="test.js" />
//    </div>,
//    document.getElementById("root")
// )

//状态组件
class Ss extends React.Component{
     constructor(props){
         super();
     }
     render(){
        return <div>
           <h1>梵蒂冈</h1>
        </div>
     }
}
let imgstyle = { width: '150px', height: '150px', marginTop: '20px' };  //内联样式
const store = createStore(themeReducer) //react-redux
ReactDOM.render(
   <div>
      <Ss />
     <Mycon1 name="test1.js" say='组件' />
     <Mycon2  title='test2.js组件'/>
     {/* <Mycon3 title='父组件向更深层的子组件传值.js组件'/> */}
     <Mycon3 />
     <Mycon4 />
      <Mycon5 />
      <Mycon6 />
      <Mycon7 />
      <Mycon8 />
      <Mycon9 />
      <Mycon10 />
      <Mycon11 />
      <Mycon13 /> 
      <Mycon14 /> 
      <Mycon15 />
      <Mycon16 />
      <Mycon17 />
      {/* <Mycon18 /> */}
      <Mycon19 />
      {/* <Mycon20 /> */}
      <Mycon21 />
      <Mycon22 />
      {/* Provider包裹在App外边，然后传递给其一个 store 这样所有其包裹的子组件都可以使用 store 上存储的数据了 */}
      <Provider store={store}> 
        <App />
      </Provider>
      <Mycon23 />
      {/* antd星评开始 */}
      <div>
      <Rate character={<Icon type="heart" />} allowHalf />
      <br />
      <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      <br />
      <Rate character="好" allowHalf />
      </div>
      {/* antd星评结束 */}
      

     {/* 插入一张图片方法一 */}
     <img src={require('./img/1.jpg')}  style={imgstyle}/> 
      {/* 插入一张图片方法二 */}
      <img src={img} style={imgstyle} />
      {/* <Mycon12/> */}
   </div>,
   document.getElementById('root')
)

