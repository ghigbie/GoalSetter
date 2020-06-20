export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'REMOVE_GOAL';

const addGoal = text => {
  return {type: ADD_GOAL, text};
};

const deleteGoal = id => {
  return {type: DELETE_GOAL, id};
};

export default {
  addGoal,
  deleteGoal,
};
