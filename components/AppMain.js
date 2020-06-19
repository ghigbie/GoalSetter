import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, FlatList, View, Button} from 'react-native';

import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

const AppMain = () => {
  const goalsStore = useSelector(state => state.goals.goals);

  const [goals, setGoals] = useState([
    {id: Math.random().toString(), goal: 'moo'},
    {id: Math.random().toString(), goal: 'Meow'},
  ]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = ({goal}) => {
    if (goal !== null && goal.length < 1) {
      setGoals(currentGoals => [
        ...currentGoals,
        {id: Math.random().toString(), goal: goal},
      ]);
    }
    setIsAddMode(!isAddMode);
  };

  const removeGoalHandler = goalId => {
    setGoals(goals.filter(goal => goalId !== goal.id));
  };

  const closeModal = () => {
    setIsAddMode(!isAddMode);
  };

  return (
    <View style={styles.outerView}>
      <Button
        title={'Add New Goal'}
        onPress={() => {
          setIsAddMode(!isAddMode);
        }}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        closeModal={closeModal}
        visible={isAddMode}
      />
      <FlatList
        style={styles.goalListContainer}
        data={goalsStore}
        keyExtractor={(item, index) => item.id}
        renderItem={goal => (
          <GoalItem
            goal={goal.item.goal}
            onDelete={() => removeGoalHandler(goal.item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    padding: 30,
  },
  addGoals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  addButton: {},
  gaolListContainer: {
    marginTop: 14,
  },
});

export default AppMain;
