import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk));

function getUserDetail (userId) {
  return (dispatch, getState) => {
    if (getState().user.id === userId) {
      // store中的user已经为当前的目标user，无需重复获取
      return;
    }

    dispatch({type: 'USER_DETAIL_REQUEST', payload: userId});
    fetch(`${API_ROOT}/user/${userId}`)
      .then(res => res.json())
      .then(res => {
        // 触发SUCCESS的action后在reducer中更新user数据
        dispatch({type: 'USER_DETAIL_REQUEST_SUCCESS', payload: res});
      })
      .catch(err => dispatch({type: 'USER_DETAIL_REQUST_FAILURE', payload: err}))
  }
}

// 获取userId为10000的用户详情
store.dispatch(getUserDetail(10000));