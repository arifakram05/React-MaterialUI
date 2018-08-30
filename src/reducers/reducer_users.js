import { FETCH_USERS } from '../actions/action_users'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_USERS:
            console.log('Processing: ', action);
            return { status: 'processing' };
        case 'FETCH_USERS_SUCCESS':
            console.log('Received success response: ', action.payload);
            return { userDetails: action.payload }
        case 'FETCH_USERS_FAILURE':
            console.log('Received error response: ', action.payload);
            return { errorDetails: action.payload }
        default:
            return state;
    }
}
