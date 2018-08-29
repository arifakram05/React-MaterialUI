export const FETCH_TODOS = 'FETCH_TODOS';

export function fetchToDos(userId) {
    console.log('action called');
    return {
        type: FETCH_TODOS,
        payload: userId
    };
}