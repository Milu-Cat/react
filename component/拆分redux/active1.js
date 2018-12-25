
function addAction(name,second,info) {
    return {
        type: 'ADD',
        payload: {
            name,
            second,
            info
        }
    }
}
export default addAction;
