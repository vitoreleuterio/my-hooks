import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const textInputRef = useRef<TextInput>(null);

  const resetButton = () => {

    if(textInputRef.current){
      textInputRef.current.focus();
      textInputRef.current.setNativeProps({
        text:"resetado"
      })
    }
  }


  return (
    <View style={styles.container}>
     <TextInput
     ref={textInputRef}
     style={
      {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom:10, 
        paddingHorizontal: 10
      }
     }
     
     />
     <Button title='resetar' onPress={resetButton}/>
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
