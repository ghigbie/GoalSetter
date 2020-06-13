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

const GoalInput = ({onAddGoal}) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = payload => {
    onAddGoal(payload);
  };

  return (
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
        onPress={() => {
          handleAddGoal({goal: enteredGoal});
          setEnteredGoal('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
