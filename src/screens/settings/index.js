import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';

const SettingsScreen = () => {

  const counterNum = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.counter}>{counterNum}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  )
}

export {SettingsScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "black",
  },
  counter: {
    fontSize: 36,
    marginBottom: 20,
    color: "black",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});