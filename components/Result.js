import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Result = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Votre score : {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
  },
});

export default Result;