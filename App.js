/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App: () => React$Node = () => {
  const [goals, setGoals] = useState([
    {id: Math.random().toString(), goal: 'moo'},
  ]);

  const addGoalHandler = payload => {
    setGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), goal: payload.goal},
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.outerView}>
        <GoalInput onAddGoal={addGoalHandler} />
        <FlatList
          style={styles.goalListContainer}
          data={goals}
          keyExtractor={(item, index) => item.id}
          renderItem={goal => (
            <GoalItem
              goal={goal.item.goal}
              onDelete={() => {
                console.log("Don't push me!");
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
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
