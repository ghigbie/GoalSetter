import {ADD_GOAL, DELETE_GOAL} from './../actions/goals';

const initialState = {
  goals: [{id: 1, goal: 'Walk puppy!'}, {id: 2, goal: 'Feed kitty.'}],
};

const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state;
    case DELETE_GOAL:
      return state;
    default:
      return state;
  }
};

export default goalsReducer;
