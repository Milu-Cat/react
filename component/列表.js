import React from 'react';

//map()方法
// class Map extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             'date':['CSS','JS','JAJA']
//         }
//     }
//     render() {
//         let arr = [1, 2, 3, 4, 5];
//         let listen = arr.map((num, index) => <li key={index}>{num}</li>)
//         let listen1=this.state.date.map((num,index)=><li key={index}>{num}</li>)
//         return (<div >
//             <h1>列表：</h1>
//             <ul style={{float:"left"}}>{listen}</ul>
//             <ul style={{float:"left"}}>{listen1}</ul>
//         </div>)     
//     }
// }
// export default Map


// //for..in方法
// class For extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             'date':{name:'lily',age:'19',sex:'女'}
//         }
//     }
//     render() {
//         let arr = [];
//         for (let i in this.state.date) {
//             arr.push(<li key={i}>{this.state.date[i]}</li>)
//         }
//         return (<div>
//             <h1 style={{float:"left"}}><ul>{arr}</ul></h1>
//         </div>)     
//     }
// }
// export default For


// //for...of方法
// class For extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             'date':{name:'lily',age:'19',sex:'女'}
//         }
//     }
//     render() {
//         let arr = [];
//         for (var i of Object.values(this.state.date)) {
//             arr.push(<li key={i}>{i}</li>)
//         }
//         return (<div>
//             <h1 style={{float:"left"}}><ul>{arr}</ul></h1>
//         </div>)     
//     }
// }
// export default For


//图文列表
class Text extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: {
                'a': '1',
                'b':'2',
                'c':'3'
            },
            title: {
                'a': '图片一',
                'b':'图片二',
                'c':'图片三'
            },
            info: {
                'a': '这是一种照片1',
                'b':'这是一种照片2',
                'c':'这是一种照片3',
            }
        }
    }


    render() {
        let arr1 = [];
        for (var i in this.state.image) {
            arr1.push(<li key={i} style={{overflow:'hidden'}}><img src={require('./../img/'+this.state.image[i]+'.jpg')} style={ {width:'150px', height: '150px',float:'left'}}/><div style={{float:'left'}}><h2>{this.state.title[i]}</h2><p>{this.state.info[i]}</p></div></li>)
        }
        return <div>
            <h1>图文列表</h1>
            <ul>{arr1}</ul>
        </div>
    }
}
export default Text