
import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, REQUEST_CONVERSATION_API_DATA, receiveApiData, receiveConversationApiData} from "../actions";
import { fetchData, getConversationsFetch } from '../api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);

    // token 
    localStorage.setItem('token', data.token)
   
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e)
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export  function* userSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

////////
function* getApiData2(action) {
  try {
    // do api call
    const data = yield call(getConversationsFetch);
    yield put(receiveConversationApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga2() {
  yield takeLatest(REQUEST_CONVERSATION_API_DATA, getApiData2);
}