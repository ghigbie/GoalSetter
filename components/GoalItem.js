import react from 'react';
import GoalItem from './components/GoalItem';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = ({goal}) => {
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});
