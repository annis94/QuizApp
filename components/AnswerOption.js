import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AnswerOption = ({ answer, onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text style={styles.text}>{answer}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    padding: 20,
    margin: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default AnswerOption;