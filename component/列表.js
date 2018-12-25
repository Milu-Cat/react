import React from 'react';

//map()方法
class Map extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'date':['CSS','JS','JAJA']
        }
    }
    render() {
        let arr = [1, 2, 3, 4, 5];
        let listen = arr.map((num, index) => <li key={index}>{num}</li>)
        let listen1=this.state.date.map((num,index)=><li key={index}>{num}</li>)
        return (<div >
            <h1>列表：</h1>
            <ul style={{float:"left"}}>{listen}</ul>
            <ul style={{float:"left"}}>{listen1}</ul>
        </div>)     
    }
}
export default Map


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
