export const FETCH_ALL_GROUPS = 'FETCH_ALL_GROUPS';

export function fetchAllGroups() {
  return {
    type: FETCH_ALL_GROUPS,
    payload: ['My Inbox', 'My Outbox', 'Compass Dev', 'Rehab Dev', 'IC Dev']
  };
}
