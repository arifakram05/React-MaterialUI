import { FETCH_TODOS } from '../actions/action_todos'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TODOS:
            console.log('Todos received for user: ', action);
            return { todosStatus: 'processing' };
        case 'FETCH_TODOS_SUCCESS':
            console.log('Received success response: ', action.payload);
            return action.payload;
        case 'FETCH_TODOS_FAILURE':
            console.log('Received error response: ', action.payload);
            return action.payload;
        default:
            console.log('default case');
            return state;
    }
}
