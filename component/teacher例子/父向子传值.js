//子组件
class Es6cComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <div>{this.props.nameall}</div>
            </div>
        )
    }
}
//父组件
class App extends React.Component{
    render(){
        return(
            <div>
                <Es6cComponent nameall="abc"/>
            </div>
        )
    }
}