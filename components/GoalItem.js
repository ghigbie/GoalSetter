import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = ({goal, onDelete}) => {
  return (
    //add conditional rendering based on phone operating system
    <TouchableOpacity
      onPress={() => {
        onDelete();
      }}>
      <View style={styles.container}>
        <Text styles={styles.text}>{goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    color: '#888',
  },
});

export default GoalItem;
