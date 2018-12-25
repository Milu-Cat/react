

function delAction(name, second, info) {
    return {
        type:'DEL',
        payload:{
            name,
            second,
            info    
        }
    } 
}
export default delAction