import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Modal} from 'react-native';

const GoalInput = ({onAddGoal, closeModal, visible}) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = payload => {
    onAddGoal(payload);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.safeArea}>
        <View style={styles.addGoals}>
          <TextInput
            placeholder={'Add a goal'}
            style={styles.input}
            value={enteredGoal}
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color="red"
                title="Cancel"
                onPress={closeModal}
                style={styles.button}
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title={'Add'}
                onPress={() => {
                  handleAddGoal({goal: enteredGoal});
                  setEnteredGoal('');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    marginTop: '56%',
    alignItems: 'center',
    flex: 1,
  },
  addGoals: {
    alignItems: 'center',
    margin: 20,
    marginTop: 60,
    width: '100%',
  },
  input: {
    borderColor: '#888',
    color: '#888',
    borderWidth: 1,
    width: '80%',
    borderRadius: 4,
    padding: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '68%',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  button: {
    width: '50%',
  },
});

export default GoalInput;
