import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '@/store/counterSlice';
import { changeColor } from '@/store/colorSlice';

const HomeScreen = () => {

  const counterNum = useSelector((state) => state.counter.value);
  const storeColor = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.counter}>{counterNum}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
      <Text style={{color: storeColor, fontSize: 24, fontWeight: "500", marginTop: 30}}>TextColor</Text>
      <View style={styles.buttonContainer}>
        <Button title="Red" onPress={() => dispatch(changeColor("red"))} />
        <Button title="Green" onPress={() => dispatch(changeColor("green"))} />
        <Button title="Blue" onPress={() => dispatch(changeColor("blue"))} />
        <Button title="Black" onPress={() => dispatch(changeColor("black"))} />
        <Button title="Orange" onPress={() => dispatch(changeColor("orange"))} />
      </View>
    </View>
  )
}

export {HomeScreen};

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
    justifyContent: 'center',
    width: '100%',
  },
});