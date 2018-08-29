import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { URL } from '../constants/constants';
import axios from 'axios';

// sagas are asynchronous i.e. all these functions run in the background.
// when a type of action is heard, a function is invoked in the background.

function fetchUsers(userId) {
  // once this method is called, an api all is made to given URI
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  return axios.get(url).then((data) => {
    console.log('successful response - ', data);
    return data.data;
  });
}

// every api call will have two generator functions

function* callUsers(action) {
  // const result = yield call(getPosts); // getPosts() method is called at this point, and its outcome is stored in variable, result
  // yield put({ type: 'FETCH_USERS_SUCCESS', result }); // dispatch another action (action type is FETCH_POSTS_SUCCESS) such that state is updated

  try {
    console.log('action is ', action);
    const result = yield call(fetchUsers, action.userId);
    console.log('result is ', result);
    yield put({
      type: "FETCH_USERS_SUCCESS",
      payload: result
    });
  } catch (e) {
    yield put({
      type: "FETCH_USERS_FAILURE",
      payload: result
    });
  }
}

// this generator function is a listener, and is listening for a type of action.
// In this case it is - FETCH_POSTS
// In order for it to listen, you will have to fork it i.e. mention this in fork()
// Once it hears the FETCH_POSTS action type, it calls callPosts() method.
// All this happens in the background.
function* getUsersSaga() {
  yield* takeEvery('FETCH_USERS', callUsers); // once it heard what it is listening for, it will call callPosts method
}

export default function* root() {
  yield [
    // all functions mentioned here are listeners listening for actions to occur
    // once a type of action is heard, corresponding saga is called.
    fork(getUsersSaga)
  ]
}
