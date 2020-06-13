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
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import GoalItem from './components/GoalItem';

const App: () => React$Node = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState(['moo', 'meow']);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, enteredGoal]);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView>
      <View style={styles.outerView}>
        <View style={styles.addGoals}>
          <TextInput
            placeholder={'Add a goal'}
            style={styles.input}
            value={enteredGoal}
            onChangeText={goalInputHandler}
          />

          <Button
            style={StyleSheet.addButton}
            title={'Add'}
            onPress={addGoalHandler}
          />
        </View>
        <View style={styles.goalListContainer}>
          {goals.map((goal, index) => (
            <GoalItem key={index} goal={goal} />
          ))}
        </View>
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
