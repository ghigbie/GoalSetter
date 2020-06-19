import {ADD_GOAL, DELETE_GOAL} from './../actions/goals';

const initialState = {
  goals: [{id: 1, goal: 'Walk puppy!'}, {id: 2, goal: 'Feed kitty.'}],
};

const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      const newGoals = [...state.goals];
      newGoals.concat({id: Math.random().toString(), goal: action.text});
      return state;
    case DELETE_GOAL:
      const filteredGoals = state.goals.filter(goal => goal.id !== action.id);
      return {goals: filteredGoals};
    default:
      return state;
  }
};

export default goalsReducer;
