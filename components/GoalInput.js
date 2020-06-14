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
  Modal,
} from 'react-native';

const GoalInput = ({onAddGoal, visible}) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = payload => {
    onAddGoal(payload);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView>
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
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addGoals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    marginTop: 60,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  addButton: {},
});

export default GoalInput;
