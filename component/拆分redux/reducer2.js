import Date from './date1.js'

function delReducer(state=Date,action) {
     switch(action.type){
         case 'DEL': {
             return {
                 ...state,
                 pro: state.pro.filter(item=>item.name !== action.payload.name)
             }
         }
         default:
         return state;
     }
}
export default delReducer