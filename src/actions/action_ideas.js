

export const FETCH_ALL_IDEAS = 'FETCH_ALL_IDEAS';

export function fetchAllIdeas() {
  return {
    type: FETCH_ALL_IDEAS,
    payload: [{
      'id': 12435,
      'group': 'Compass Dev',
      'idea': 'Get more experienced people',
      'description': 'We need to hire more experienced people in UI development',
      'likes': 21,
      'dislikes': 4,
      'comments': []
    }, {
      'id': 1436234,
      'group': 'Rehab Dev',
      'idea': 'Need more outings',
      'description': 'To build team, we need to have frequent team outings',
      'likes': 11,
      'dislikes': 6,
      'comments': []
    }, {
      'id': 4363,
      'group': 'Infection Control and Interdisciplinary Care',
      'idea': 'Need more cubicles',
      'description': 'Please assign own cubicle to interns',
      'likes': 9,
      'dislikes': 14,
      'comments': []
    }]
  };
}
