export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(userId) {
    console.log('fetchUsers action called');
    return {
        type: FETCH_USERS,
        payload: userId
    };
}