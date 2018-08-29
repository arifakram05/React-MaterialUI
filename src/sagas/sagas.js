import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import { FETCH_POSTS } from '../actions/action_posts';
import { URL } from '../constants/constants';
import axios from 'axios';

// sagas are asynchronous i.e. all these functions run in the background.
// when a type of action is heard, a function is invoked in the background.

function getPosts() {
  // once this method is called, an api all is made to given URI
  return axios.get(URL);
}

// every api call will have two generator functions

function* callPosts(action) {
  const result = yield call(getPosts); // getPosts() method is called at this point, and its outcome is stored in variable, result
  yield put({ type: 'FETCH_POSTS_SUCCESS', result }); // dispatch another action (action type is FETCH_POSTS_SUCCESS) such that state is updated
}

// this generator function is a listener, and is listening for a type of action.
// In this case it is - FETCH_POSTS
// In order for it to listen, you will have to fork it i.e. mention this in fork()
// Once it hears the FETCH_POSTS action type, it calls callPosts() method.
// All this happens in the background.
function* getPostsSaga() {
  yield* takeEvery(FETCH_POSTS, callPosts); // once it heard what it is listening for, it will call callPosts method
}

function getUserInfo(userId) {
  const url = `https://jsonplaceholder.typicode.com/users${userId}`;
  return axios.get(URL).then((data) => {
    console.log('successful response - ', data);
    return JSON.parse(data.text);
  });
}

function* callTodos(action) {
  try {
    const result = yield call(getUserInfo, action.payload.userId);
    yield put({ type: "FETCH_TODOS_SUCCESS", payload: result });
  } catch (e) {
    yield put({ type: "FETCH_TODOS_FAILURE", payload: result });
  }
}

function* getTodosSaga() {
  yield* takeEvery('FETCH_TODOS', callTodos); // once it heard what it is listening for, it will call callPosts method
}

export default function* root() {
  yield [
    // all functions mentioned here are listeners listening for actions to occur
    // once a type of action is heard, corresponding saga is called.
    fork(getPostsSaga),
    fork(getTodosSaga),
  ]
}
