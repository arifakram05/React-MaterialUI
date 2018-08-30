import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import axios from 'axios';

// sagas are asynchronous i.e. all these functions run in the background.
// when a type of action is heard, a function is invoked in the background.

function fetchUsers(userId) {
  // once this method is called, an api all is made to given URI
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return axios.get(url).then((response) => {
    console.log('success response - ', response);
    return {response: response.data};
  }).catch((error) => {
    console.log('error response - ', error);
    return {error: error};
  });
}

// every api call will have two generator functions

function* callUsers(action) {
    console.log('action is ', action);
    const {response, error} = yield call(fetchUsers, action.userId);// fetchUsers() is called with given parameter values
    if(response) {
      yield put({
        type: "FETCH_USERS_SUCCESS",
        payload: response
      }); // dispatch another action (action type is FETCH_USERS_SUCCESS) such that state is updated
    } else {
      yield put({
        type: "FETCH_USERS_FAILURE",
        payload: error
      }); // dispatch another action (action type is FETCH_USERS_FAILURE) such that state is updated
    }
}

// this generator function is a listener, and is listening for a type of action.
// In this case it is - FETCH_USERS
// In order for it to listen, you will have to fork it i.e. mention this in fork()
// Once it hears the FETCH_USERS action type, it calls callUsers() method.
// All this happens in the background.
function* getUsersSaga() {
  yield* takeEvery('FETCH_USERS', callUsers); // once it heard what it is listening for, it will call callUsers method
}

export default function* root() {
  yield [
    // all functions mentioned here are listeners listening for actions to occur
    // once a type of action is heard, corresponding saga is called.
    fork(getUsersSaga)
  ]
}
