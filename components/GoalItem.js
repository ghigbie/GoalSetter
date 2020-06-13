import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = ({goal}) => {
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>{goal}</Text>
    </View>
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
