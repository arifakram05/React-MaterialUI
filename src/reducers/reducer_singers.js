export default function getSingers(state = null, action) {
  switch (action.type) {
    case 'LOAD_SINGERS':
      return action.payload;
  }
  return state;
}
