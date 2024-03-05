import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(11.3);
  const  basePrice = 11.3;

  const removeNumber = () => {
    setQuantity((prevQuantity: number) => {
      const newQuantity = prevQuantity - 1;
      setPrice(basePrice * newQuantity)
      return newQuantity
    })
  }

  const addNumber = () => {
    setQuantity((prevQuantity: number) => {
      const newQuantity = prevQuantity + 1;
      setPrice(basePrice * newQuantity)
      return newQuantity
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Button title='-' onPress={removeNumber}/>
        <Text>{quantity.toFixed(2)}</Text>
        <Button title='+' onPress={addNumber}/>
        <Text>{price.toFixed(2)}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
