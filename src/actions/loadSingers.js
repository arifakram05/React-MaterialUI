export function loadSingers(singers) {
  return {
    type: 'LOAD_SINGERS',
    payload: singers
  };
}
