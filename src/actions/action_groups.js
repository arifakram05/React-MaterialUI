export const FETCH_ALL_GROUPS = 'FETCH_ALL_GROUPS';

export function fetchAllGroups() {
  return {
    type: FETCH_ALL_GROUPS,
    payload: ['Compass Dev', 'Rehab Dev', 'IC Dev']
  };
}
