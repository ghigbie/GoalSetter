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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState(['moo', 'meow']);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleOnPress = newGoal => {
    const goalsList = goals.push(newGoal);
    setGoals(goalsList);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView>
      <View style={styles.outerView}>
        <TextInput
          placeholder={'Add a goal'}
          style={styles.input}
          value={enteredGoal}
          onChangeText={() => {
            goalInputHandler(this.value);
          }}
        />

        <Button
          title={'Add'}
          onPress={() => {
            handleOnPress(enteredGoal);
          }}
        />
      </View>
      <View style={styles.list}>
        {goals.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerView: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  list: {},
});
export default App;
