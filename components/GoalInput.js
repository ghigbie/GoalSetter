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
      <SafeAreaView style={styles.safeArea}>
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
  safeArea: {
    flex: 1,
  },
  addGoals: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginTop: 60,
  },
  input: {
    borderColor: '#888',
    color: '#888',
    borderWidth: 1,
    width: '80%',
    borderRadius: 4,
    padding: 6,
  },
  addButton: {
    width: '100%',
  },
});

export default GoalInput;
