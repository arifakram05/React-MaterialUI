import CompassDev from '../mock/compassdev.json'
import ICDev from '../mock/icdev.json'
import RehabDev from '../mock/rehabdev.json'

export const FETCH_ALL_IDEAS = 'FETCH_ALL_IDEAS';

export function fetchAllIdeas(group) {
  console.log('fetching idea of ', group);
  let groupToReturn;
  switch (group) {
    case 'Compass Dev':
      groupToReturn = CompassDev;
      break;
    case 'Rehab Dev':
      console.log('fetching data for Rehab Dev....');
      groupToReturn = RehabDev;
      break;
    case 'IC Dev':
      groupToReturn = ICDev;
      break;
    default:
      // do nothing
  }
  return {
    type: FETCH_ALL_IDEAS,
    payload: groupToReturn
  };
}
