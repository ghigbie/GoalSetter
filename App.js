/**
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useSelector} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View, Button} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import goalsReducer from './store/goals';
const rootReducer = combineReducers({
  goals: goalsReducer,
});
const store = createStore(rootReducer);

const App: () => React$Node = () => {
  const goalsStore = useSelector(state => state.goals);

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
    <Provider store={store}>
      <SafeAreaView>
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
      </SafeAreaView>
    </Provider>
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

export default App;
